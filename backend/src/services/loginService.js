import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config';
import { User } from '../models/User';

export function validateLogin(email, password) {
  if (!email && !password) throw new Error('emptyFields');
  if (!email) throw new Error('emptyEmail');
  if (!password) throw new Error('emptyPassword');
}

export async function verifyUser(email, password) {
  const user = await User.findOne({
    attributes: ['id', 'name', 'password'],
    where: {
      email,
    },
  });
  if (!user) throw new Error('incorrectCredentials');
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error('incorrectCredentials');
  return user;
}

export async function generateToken(user) {
  const { id, name } = user;
  return jwt.sign(
    {
      id,
      name,
    },
    config.access_secret,
  );
}

export const loginService = {
  async loginUser(email, password) {
    validateLogin(email, password);
    const user = await verifyUser(email, password);
    const accessToken = await generateToken(user);
    return {
      status: 'ok',
      token: accessToken,
    };
  },
};
