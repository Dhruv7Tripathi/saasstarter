# SaaS Starter with Nextauth, Razorpay, Prisma, and PostgreSQL

This is a starter template for Next.js projects with built-in authentication, Razorpay integration, Prisma ORM, and PostgreSQL .

## Features

- Next.js with App Router
- NextAuth for authentication
- Razorpay integration for payments
- Prisma ORM for database management
- PostgreSQL database (containerized with Docker)
- Tailwind CSS for styling
- TypeScript support

## Prerequisites

- Node.js and npm

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/dhruv7tripathi/saasstarter
   ```

2. Install dependencies:

   ```bash
   cd your-repo-name
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and fill in your details.

   ```bash
   DATABASE_URL=
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET=
   GOOGLE_CLIENT_SECRET=
   GOOGLE_CLIENT_ID=
   GITHUB_CLIENT_ID=
   GITHUB_CLIENT_SECRET=
   EMAIL=
   EMAIL_PASSWORD=
   RAZORPAY_KEY_ID=
   RAZORPAY_KEY_SECRET=
   NEXT_PUBLIC_RAZORPAY_KEY_ID=
   ```

4. Make .env file same as example env file, if usind docker for database kepp the DATABASE_URL same as example

5. Run Prisma migrations:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```
