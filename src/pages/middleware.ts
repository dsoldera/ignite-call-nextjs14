import type { MiddlewareConfig, NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
 
const publicRoutes = [
  {path: '/hello', whenAuthenticated: 'next'},
  {path: '/register', whenAuthenticated: 'redirect'},
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED = '/hello'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const publicRoute = publicRoutes.find(route => route.path === path)
  const authToken = request.cookies.get('token')

  if(!authToken && publicRoute){
    return NextResponse.next()
  }

  if(!authToken && !publicRoute) {
    const redirectUrl = request.nextUrl.clone()

    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED

    return NextResponse.redirect(redirectUrl)
  }

  // if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
  //   const redirectUrl = request.nextUrl.clone()

  //   redirectUrl.pathname = '/'

  //   return NextResponse.redirect(redirectUrl)
  // }

  if(authToken && !publicRoute) {
    // check if the JWS is not expired
  }

  return NextResponse.next()
}
 
export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}