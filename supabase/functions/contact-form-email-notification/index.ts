import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// This function is triggered by a database webhook.
// It receives the new record and sends a formatted email using Resend.

// Get secrets from environment variables
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const NOTIFICATION_EMAIL = Deno.env.get('NOTIFICATION_EMAIL')

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    const { record } = await req.json()

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set in environment secrets.')
    }
    if (!NOTIFICATION_EMAIL) {
      throw new Error('NOTIFICATION_EMAIL is not set in environment secrets.')
    }

    const { name, email, phone, company, inquiry_type, message, created_at } = record
    const submissionDate = new Date(created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Construct the email payload for Resend
    const emailPayload = {
      from: `Contact Form <noreply@yourverifieddomain.com>`, // IMPORTANT: Replace with your verified domain from Resend
      to: [NOTIFICATION_EMAIL],
      subject: `New Inquiry from ${name} via SNG Eco India Website`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2 style="color: #00ABB4;">New Contact Form Submission</h2>
          <p>You have received a new message from your website's contact form.</p>
          <hr style="border: none; border-top: 1px solid #eee;" />
          <h3 style="color: #333;">Submission Details:</h3>
          <ul style="list-style: none; padding: 0;">
            <li><strong>From:</strong> ${name}</li>
            <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
            <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
            <li><strong>Company:</strong> ${company || 'N/A'}</li>
            <li><strong>Inquiry Type:</strong> ${inquiry_type}</li>
            <li><strong>Received on:</strong> ${submissionDate}</li>
          </ul>
          <h3 style="color: #333;">Message:</h3>
          <div style="background-color: #f4f4f4; border-left: 4px solid #00ABB4; padding: 15px; margin-top: 10px;">
            <p style="margin: 0;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 20px;" />
          <p style="font-size: 0.8em; color: #777;">This is an automated notification from the SNG Eco India website.</p>
        </div>
      `,
    };

    // Send the email using Resend's API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json();
      throw new Error(`Resend API error: ${JSON.stringify(errorData)}`);
    }

    return new Response(JSON.stringify({ message: 'Notification email sent' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error) {
    console.error('Error sending email notification:', error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});
