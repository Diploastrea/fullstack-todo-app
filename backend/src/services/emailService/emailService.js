import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import config from '../../config';
import { User } from '../../models/User';

export function sendConfirmation(userId, name, email) {
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
      const url = `http://localhost:8080/api/confirmation/${emailToken}`;
      transporter.sendMail({
        to: email,
        subject: 'Confirm email',
        html: `Dear ${name}, we are happy to welcome you to our to do application.
        Please click the following link to confirm your email address:
        <br> <a href="${url}">${url}</a>`,
      });
    },
  );
}

export async function verifyToken(token) {
  try {
    const { userId } = jwt.verify(token, config.email_secret);
    await User.update({
      isVerified: true,
    }, {
      where: {
        id: userId,
      },
    });
  } catch (err) {
    throw new Error('invalidToken');
  }
}

export const emailService = {
  sendEmail(userId, name, email) {
    sendConfirmation(userId, name, email);
  },
  async verifyEmailToken(token) {
    await verifyToken(token);
    return {
      status: 'ok',
      message: 'Email verified!',
    };
  },
};
