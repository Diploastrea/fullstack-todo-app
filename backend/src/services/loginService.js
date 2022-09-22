import bcrypt from 'bcrypt';
import { User } from '../models/User';

export function validateLogin(email, password) {
  if (!email && !password) throw new Error('emptyFields');
  if (!email) throw new Error('emptyEmail');
  if (!password) throw new Error('emptyPassword');
}

export async function verifyUser(email, password) {
  const user = await User.findOne({
    attributes: ['id', 'password'],
    where: {
      email,
    },
  });
  if (!user) throw new Error('incorrectCredentials');
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) throw new Error('incorrectCredentials');
  return user;
}

export const loginService = {
  async loginUser(email, password) {
    validateLogin(email, password);
    const user = await verifyUser(email, password);
    return user;
  },
};
