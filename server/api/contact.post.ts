export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, email, business, website, message } = body

  if (!name || !email || !business) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email and business name are required.'
    })
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Invalid email address.'
    })
  }

  // Log the contact submission (replace with email service like Resend later)
  console.log('[Contact Form]', {
    name,
    email,
    business,
    website: website || '(not provided)',
    message: message || '(no message)',
    timestamp: new Date().toISOString()
  })

  // TODO: Integrate with Resend or Formspree to send email to hello@7clicks.dev
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY)
  // await resend.emails.send({
  //   from: 'contact@7clicks.dev',
  //   to: 'hello@7clicks.dev',
  //   subject: `New lead: ${business} — ${name}`,
  //   html: `<p><strong>Name:</strong> ${name}</p>
  //          <p><strong>Email:</strong> ${email}</p>
  //          <p><strong>Business:</strong> ${business}</p>
  //          <p><strong>Website:</strong> ${website || 'N/A'}</p>
  //          <p><strong>Message:</strong> ${message || 'N/A'}</p>`
  // })

  return {
    success: true,
    message: 'Thank you! We\'ll get back to you within 24 hours.'
  }
})
