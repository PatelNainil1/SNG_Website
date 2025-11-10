import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// This function is triggered by a database webhook.
// It receives the new record and sends a formatted message to Slack.

serve(async (req) => {
  if (req.method !== 'POST') {
    return new Response('Method Not Allowed', { status: 405 })
  }

  try {
    const { record } = await req.json()
    const SLACK_WEBHOOK_URL = Deno.env.get('SLACK_WEBHOOK_URL')

    if (!SLACK_WEBHOOK_URL) {
      throw new Error('SLACK_WEBHOOK_URL is not set in environment secrets.')
    }

    // Destructure the record with fallbacks
    const { name, email, phone, company, inquiry_type, message, created_at } = record
    const submissionDate = new Date(created_at).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Format the message for Slack using Block Kit for a rich layout
    const slackPayload = {
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📬 New Contact Form Submission',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*From:*\n${name}` },
            { type: 'mrkdwn', text: `*Email:*\n<mailto:${email}|${email}>` },
            { type: 'mrkdwn', text: `*Phone:*\n${phone || 'N/A'}` },
            { type: 'mrkdwn', text: `*Company:*\n${company || 'N/A'}` },
          ],
        },
        {
          type: 'section',
          fields: [
            { type: 'mrkdwn', text: `*Inquiry Type:*\n\`${inquiry_type}\`` },
          ]
        },
        {
          type: 'divider',
        },
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Message:*\n>${message.replace(/\n/g, '\n>')}`,
          },
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `Received on: ${submissionDate}`,
            },
          ],
        },
      ],
    }

    // Send the payload to the Slack Webhook URL
    const slackResponse = await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackPayload),
    })

    if (!slackResponse.ok) {
      const errorText = await slackResponse.text();
      throw new Error(`Slack API error: ${errorText}`);
    }

    return new Response(JSON.stringify({ message: 'Notification sent to Slack' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    console.error('Error sending Slack notification:', error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})
