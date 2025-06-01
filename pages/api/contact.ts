import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { fullName, email, phone, budget, description } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: 'buezetechlimited@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
          Name: ${fullName}
          Email: ${email}
          Phone: ${phone}
          Budget: ${budget}
          Message: ${description}
        `,
      });

      return res.status(200).json({ message: 'Form submitted successfully' });

    } catch (error) {
      console.error('Email sending error:', error);
      return res.status(500).json({ message: 'Failed to send message. Please try again.' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}

