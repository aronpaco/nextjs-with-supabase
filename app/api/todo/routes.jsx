import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json('helo')
}

export async function POST() {
    const data = await req.json()
    return NextResponse.json(data.hello)
  }