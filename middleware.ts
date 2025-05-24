
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export const config = {
  matcher: ['/pricing', '/signin', '/', '/signup', '/verify/:path*'],
};

export default async function middleware(request: NextRequest) {

  const token = await getToken({ req: request });
  const url = request.nextUrl;

  if (
    token &&
    (url.pathname.startsWith('/signin') ||
      url.pathname.startsWith('/signup') ||
      url.pathname.startsWith('/verify'))
  ) {
    return NextResponse.redirect(new URL('/pricing', request.url));
  }

  if (
    !token &&
    (url.pathname.startsWith('/pricing'))
  ) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}