// # Create directory if it doesn't exist
if (!(Test-Path -Path scripts)) { New-Item -ItemType Directory -Path scripts }

//   Create/clear the test file
$content = @"
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.local' });

(async () => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false // Set to true in production
    }
  });

  try {
    console.log('Testing SMTP connection...');
    await transporter.verify();
    console.log('✅ SMTP connection verified');
    
    const info = await transporter.sendMail({
      from: `"Test" <${process.env.EMAIL_USER}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      subject: 'SMTP Test',
      text: 'This is a test email from your Node.js application',
      html: '<p>This is a test email from your Node.js application</p>'
    });
    
    console.log('📧 Test email sent:', info.messageId);
    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error('❌ SMTP Error:', error);
    process.exit(1);
  }
})();
"@

Set-Content -Path scripts/test-smtp.js -Value $content