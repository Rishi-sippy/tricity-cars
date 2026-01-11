import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { password } = await req.json()

  if (password !== process.env.ADMIN_PASSWORD) {
    return new NextResponse('Unauthorized', { status: 401 })
  }

  const res = NextResponse.json({ success: true })

  res.cookies.set('admin-auth', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 24 // 1 day
  })

  return res
}
