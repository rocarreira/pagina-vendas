import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Se está tentando acessar /dashboard sem estar logado
  if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/auth', req.url))
  }

  // Se está logado e tenta acessar /auth, redireciona para dashboard
  if (req.nextUrl.pathname.startsWith('/auth') && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/auth'],
}
