import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-next-pathname', request.nextUrl.pathname);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

/** 기본으로 `public` 이하 경로가 매치되기 때문에 주의 필요 */
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|robots.txt).*)'],
};
