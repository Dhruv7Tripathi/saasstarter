import { ApiResponse } from "@/lib/apiresponse";

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendVerificationEmail(email: string,
  name: string,
  verifyCode: string): Promise<ApiResponse> {

  const mailOptions = {
    from: `"Starter" <${process.env.EMAIL}>`,
    to: email,
    subject: "saasstarter- Verify your email",
    text: `Hello ${name}, Your verification code is ${verifyCode}`,
    html: `<b>Hello ${name}, Your verification code is ${verifyCode}</b>`,
  }

  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(mailOptions, (err: Error | null, info: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(info);
        }
      });
    });

    return { success: true, message: 'Verification email sent successfully.' };
  } catch (error) {
    console.log('Error sending verification email:', error);
    return { success: false, message: 'Failed to send verification email.' };
  }
}