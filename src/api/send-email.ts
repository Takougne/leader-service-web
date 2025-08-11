// pages/api/send-email.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false,
      error: 'Method not allowed' 
    });
  }

  // Validate required fields
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  // Configure SMTP transporter with Hostinger settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: "TLSv1.2"
    }
  });

  try {
    // Send email to both admin and client
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: `${process.env.NEXT_PUBLIC_CONTACT_EMAIL}, ${email}`,
      subject: `[Contact Form] ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Sent via ${process.env.NEXT_PUBLIC_SITE_NAME || 'your website'}</p>
      `,
      text: `
        New Contact Form Submission
        ---------------------------
        From: ${name} (${email})
        Subject: ${subject}
        
        Message:
        ${message}
        
        Sent via ${process.env.NEXT_PUBLIC_SITE_NAME || 'your website'}
      `
    });

    // Send confirmation to the user
    await transporter.sendMail({
      from: `"${process.env.NEXT_PUBLIC_SITE_NAME || 'Site Admin'}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We've received your message`,
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for contacting us. We've received your message and will respond shortly.</p>
        <p><strong>Your message:</strong></p>
        <blockquote>${message.replace(/\n/g, '<br>')}</blockquote>
        <p>Best regards,<br>${process.env.NEXT_PUBLIC_SITE_NAME || 'The Team'}</p>
      `
    });

    return res.status(200).json({ 
      success: true,
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to send email',
      details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
    });
  }
}