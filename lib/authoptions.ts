import db from "@/lib/db";
import { NextAuthOptions, type DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { Provider } from "@prisma/client";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from "bcrypt";
import prisma from "@/lib/db";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID ?? "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any): Promise<any> {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            }
          });
          if (!user) {
            throw new Error('No user found with this email');
          }
          if (!user.isVerified) {
            throw new Error('Please verify your account before logging in');
          }
          if (!user.password) {
            throw new Error('User does not have a password set');
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error('Incorrect password');
          }
        } catch (err: any) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET ?? "secret",
  callbacks: {
    async signIn(params) {
      if (!params.user.email) {
        return false;
      }

      try {
        const existingUser = await db.user.findUnique({
          where: {
            email: params.user.email,
          },
        });
        if (existingUser) {
          return true;
        }
        await db.user.create({
          data: {
            email: params.user.email,
            image: params.user.image ?? "",
            name: params.user.name ?? "",
            provider: params.account?.provider as Provider ?? "credentials",
          },
        });
        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    async jwt({ token, user }) {
      if (user && user.email) {
        const dbUser = await db.user.findUnique({
          where: {
            email: user.email,
          },
        });

        if (!dbUser) {
          return token;
        }

        return {
          ...token,
          id: dbUser.id,
        };
      }

      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
        },
      };
    },
  },
} satisfies NextAuthOptions;

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}