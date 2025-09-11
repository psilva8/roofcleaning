import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Temporarily disabled for static export compatibility
export function middleware_disabled(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip redirects for:
  // - API routes
  // - _next static files
  // - favicon, robots.txt, sitemap.xml, etc.
  // - Files with extensions
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.includes('.') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  // Redirect non-trailing slash URLs to trailing slash versions
  // Exception: homepage "/" should not get a trailing slash
  if (pathname !== '/' && !pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname + '/'
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sitemap.xml, robots.txt (SEO files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
}

