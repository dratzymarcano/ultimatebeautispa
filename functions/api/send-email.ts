/// <reference types="@cloudflare/workers-types" />

interface Env {
  RESEND_API_KEY: string;
  BOOKINGS: KVNamespace;
}

interface EmailPayload {
  type: 'contact' | 'booking' | 'newsletter';
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  service?: string;
  date?: string;
  time?: string;
  notes?: string;
  treatments?: string[];
  lang?: 'en' | 'fr';
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildContactEmail(data: EmailPayload): { subject: string; html: string } {
  const subject = `New Contact Message from ${data.firstName} ${data.lastName}`;
  const html = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden;">
      <div style="background: #0a0a0a; padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; letter-spacing: 0.05em;">💬 New Contact Message</h1>
      </div>
      <div style="padding: 32px 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px; width: 120px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a; font-weight: 500;">${escapeHtml(data.firstName || '')} ${escapeHtml(data.lastName || '')}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a;"><a href="mailto:${escapeHtml(data.email || '')}" style="color: #E11D48;">${escapeHtml(data.email || '')}</a></td>
          </tr>
          ${data.phone ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a;"><a href="tel:${escapeHtml(data.phone)}" style="color: #E11D48;">${escapeHtml(data.phone)}</a></td>
          </tr>` : ''}
          ${data.subject ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Subject</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a; font-weight: 500;">${escapeHtml(data.subject)}</td>
          </tr>` : ''}
        </table>
        <div style="margin-top: 24px; padding: 20px; background: #ffffff; border-radius: 8px; border: 1px solid #e5e5e5;">
          <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Message</p>
          <p style="margin: 0; color: #0a0a0a; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(data.message || '')}</p>
        </div>
      </div>
      <div style="padding: 16px 24px; text-align: center; color: #999; font-size: 11px;">
        Sent from ultimatebeautyspa.com contact form
      </div>
    </div>
  `;
  return { subject, html };
}

function buildBookingEmail(data: EmailPayload): { subject: string; html: string } {
  const subject = `New Booking Request — ${data.service} — ${data.firstName} ${data.lastName}`;
  const treatmentsList = data.treatments && data.treatments.length > 0
    ? data.treatments.map(t => `<li style="padding: 4px 0; color: #0a0a0a;">${escapeHtml(t)}</li>`).join('')
    : '';

  const html = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden;">
      <div style="background: #E11D48; padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0; letter-spacing: 0.05em;">📋 New Booking Request</h1>
      </div>
      <div style="padding: 32px 24px;">
        <div style="background: #ffffff; border-radius: 8px; padding: 20px; border: 1px solid #e5e5e5; margin-bottom: 20px;">
          <p style="margin: 0 0 4px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Service</p>
          <p style="margin: 0; color: #0a0a0a; font-size: 18px; font-weight: 600;">${escapeHtml(data.service || '')}</p>
        </div>
        ${treatmentsList ? `
        <div style="background: #ffffff; border-radius: 8px; padding: 20px; border: 1px solid #e5e5e5; margin-bottom: 20px;">
          <p style="margin: 0 0 8px; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Selected Treatments</p>
          <ul style="margin: 0; padding-left: 16px;">${treatmentsList}</ul>
        </div>` : ''}
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px; width: 120px;">Date</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a; font-weight: 600;">${escapeHtml(data.date || '')}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Time</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a; font-weight: 600;">${escapeHtml(data.time || '')}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Name</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a;">${escapeHtml(data.firstName || '')} ${escapeHtml(data.lastName || '')}</td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Email</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a;"><a href="mailto:${escapeHtml(data.email || '')}" style="color: #E11D48;">${escapeHtml(data.email || '')}</a></td>
          </tr>
          <tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Phone</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a;"><a href="tel:${escapeHtml(data.phone || '')}" style="color: #E11D48;">${escapeHtml(data.phone || '')}</a></td>
          </tr>
          ${data.notes ? `<tr>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #666; font-size: 13px;">Notes</td>
            <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; color: #0a0a0a;">${escapeHtml(data.notes)}</td>
          </tr>` : ''}
        </table>
      </div>
      <div style="padding: 16px 24px; text-align: center; color: #999; font-size: 11px;">
        Sent from ultimatebeautyspa.com booking form
      </div>
    </div>
  `;
  return { subject, html };
}

function buildNewsletterEmail(data: EmailPayload): { subject: string; html: string } {
  const subject = `New Newsletter Subscriber: ${data.email}`;
  const html = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafafa; border-radius: 12px; overflow: hidden;">
      <div style="background: #0a0a0a; padding: 32px 24px; text-align: center;">
        <h1 style="color: #ffffff; font-size: 20px; margin: 0;">✨ New Newsletter Subscriber</h1>
      </div>
      <div style="padding: 32px 24px; text-align: center;">
        <p style="margin: 0 0 8px; color: #666; font-size: 13px;">Email Address</p>
        <p style="margin: 0; color: #0a0a0a; font-size: 18px; font-weight: 600;"><a href="mailto:${escapeHtml(data.email || '')}" style="color: #E11D48;">${escapeHtml(data.email || '')}</a></p>
      </div>
      <div style="padding: 16px 24px; text-align: center; color: #999; font-size: 11px;">
        Submitted via ultimatebeautyspa.com footer newsletter
      </div>
    </div>
  `;
  return { subject, html };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  try {
    const data: EmailPayload = await context.request.json();

    if (!data.type) {
      return new Response(JSON.stringify({ error: 'Missing form type' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    let emailContent: { subject: string; html: string };

    switch (data.type) {
      case 'contact':
        if (!data.firstName || !data.lastName || !data.email || !data.message) {
          return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }
        emailContent = buildContactEmail(data);
        break;

      case 'booking':
        if (!data.service || !data.date || !data.time || !data.firstName || !data.email || !data.phone) {
          return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }
        emailContent = buildBookingEmail(data);
        break;

      case 'newsletter':
        if (!data.email) {
          return new Response(JSON.stringify({ error: 'Email is required' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json', ...corsHeaders },
          });
        }
        emailContent = buildNewsletterEmail(data);
        break;

      default:
        return new Response(JSON.stringify({ error: 'Invalid form type' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        });
    }

    const resendPayload: Record<string, unknown> = {
      from: 'Ultimate Beauty Spa <noreply@ultimatebeautyspa.net>',
      to: ['hello@ultimatebeautyspa.net'],
      subject: emailContent.subject,
      html: emailContent.html,
    };

    // Add reply-to for contact and booking forms
    if (data.email && data.type !== 'newsletter') {
      resendPayload.reply_to = data.email;
    }

    const resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${context.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendRes.ok) {
      const err = await resendRes.text();
      console.error('Resend API error:', err);
      return new Response(JSON.stringify({ error: 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const result = await resendRes.json();

    // Save booked slot to KV so other users can't book the same time
    if (data.type === 'booking' && data.date && data.time && context.env.BOOKINGS) {
      try {
        const key = `slots:${data.date}`;
        const existing = await context.env.BOOKINGS.get(key);
        const slots: string[] = existing ? JSON.parse(existing) : [];
        if (!slots.includes(data.time)) {
          slots.push(data.time);
          // Store for 90 days
          await context.env.BOOKINGS.put(key, JSON.stringify(slots), { expirationTtl: 60 * 60 * 24 * 90 });
        }
      } catch (kvErr) {
        console.error('KV write error:', kvErr);
      }
    }

    return new Response(JSON.stringify({ success: true, id: (result as Record<string, unknown>).id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  } catch (err) {
    console.error('Send email error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
};
