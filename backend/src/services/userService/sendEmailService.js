import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import config from '../../config';

export async function sendEmail(userId, email) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: config.gmail_user,
      pass: config.gmail_password,
    },
  });
  jwt.sign(
    {
      userId,
    },
    config.email_secret,
    {
      expiresIn: '20m',
    },
    (err, emailToken) => {
      const url = `https://localhost:8080/api/confirmation/${emailToken}`;
      transporter.sendMail({
        to: email,
        subject: 'Confirm email',
        html: `Please click this link to confirm your email: <a href="${url}">${url}</a>`,
      });
    },
  );
}
