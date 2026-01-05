const { Resend } = require('resend');

// Vercel serverless function to accept contact form submissions and send email via Resend
// Ensure RESEND_API_KEY is configured in Vercel environment variables

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const formData = req.body;

    if (!formData || !formData.firstName || !formData.lastName || !formData.email || !formData.company || !formData.message) {
      return res.status(400).json({ success: false, error: 'Missing required fields: firstName, lastName, email, company, message' });
    }

    // Build HTML email content (kept concise and professional)
    const emailContent = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; background:#f8fafc; margin:0;">
          <div style="max-width:680px;margin:24px auto;padding:24px;background:#ffffff;border-radius:8px;">
            <h2 style="margin:0 0 8px;color:#111827;">💬 New Contact Form Submission</h2>
            <p style="margin:0 0 18px;color:#6b7280;font-size:14px;">Submission ID: ${Date.now()}</p>

            <h3 style="margin:0 0 8px;color:#111827;font-size:15px;">Contact</h3>
            <p style="margin:0 0 12px;color:#111827;"><strong>Name:</strong> ${formData.firstName} ${formData.lastName}<br/>
            <strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a><br/>
            <strong>Company:</strong> ${formData.company}</p>

            <h3 style="margin:0 0 8px;color:#111827;font-size:15px;">Message</h3>
            <div style="background:#f1f5f9;padding:12px;border-radius:6px;color:#111827;white-space:pre-wrap;">${String(formData.message)}</div>

            <hr style="margin:20px 0;border:none;border-top:1px solid #eef2f7;"/>
            <p style="margin:0;color:#6b7280;font-size:13px;">This message was sent via the Gaigentic AI website.</p>
          </div>
        </body>
      </html>
    `;

    const fromName = process.env.RESEND_FROM_NAME || 'Gaigentic AI Contact';
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@gaigentic.ai';

    // Send email
    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: [toEmail],
      subject: `💬 New Contact: ${formData.firstName} ${formData.lastName} from ${formData.company}`,
      html: emailContent,
      replyTo: formData.email,
    });

    return res.status(200).json({ success: true, data: result });

  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
};
