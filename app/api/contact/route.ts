import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Update `from` to "Portfolio Contact <contact@reshaan.com>" once a custom domain is verified in Resend.
const FROM = 'Portfolio Contact <onboarding@resend.dev>'
const TO = 'reshaangovender@gmail.com'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null)

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const { name, email, message } = body as Record<string, unknown>

  if (!name || typeof name !== 'string' || !name.trim()) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
  }
  if (!email || typeof email !== 'string' || !emailRe.test(email.trim())) {
    return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 })
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[contact] RESEND_API_KEY is not set. Email not sent.')
    return NextResponse.json(
      { error: 'Failed to send message. Please email me directly.' },
      { status: 500 },
    )
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email.trim(),
      subject: `New contact form submission from ${name.trim()}`,
      text: [
        `Name: ${name.trim()}`,
        `Email: ${email.trim()}`,
        '',
        'Message:',
        message.trim(),
      ].join('\n'),
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json(
      { error: 'Failed to send message. Please email me directly.' },
      { status: 500 },
    )
  }
}
