import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, business, website, message } = body

  if (!name || !email || !business) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email and business name are required.'
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address.'
    })
  }

  const config = useRuntimeConfig()

  if (!config.resendApiKey) {
    console.warn('[Contact Form] RESEND_API_KEY not set — logging submission only')
    console.log('[Contact Form]', { name, email, business, website, message, timestamp: new Date().toISOString() })
    return {
      success: true,
      message: 'Thank you! We\'ll get back to you within 24 hours.'
    }
  }

  const resend = new Resend(config.resendApiKey)

  await resend.emails.send({
    from: '7clicks <contact@7clicks.dev>',
    to: 'hello@7clicks.dev',
    replyTo: email,
    subject: `New lead: ${business} — ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; font-weight: bold;">Name</td><td style="padding: 8px 0;">${name}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Business</td><td style="padding: 8px 0;">${business}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Website</td><td style="padding: 8px 0;">${website || 'N/A'}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: bold;">Message</td><td style="padding: 8px 0;">${message || 'N/A'}</td></tr>
        </table>
        <hr style="margin-top: 24px; border: none; border-top: 1px solid #e2e8f0;" />
        <p style="color: #94a3b8; font-size: 12px;">Sent from 7clicks.dev contact form</p>
      </div>
    `
  })

  return {
    success: true,
    message: 'Thank you! We\'ll get back to you within 24 hours.'
  }
})
