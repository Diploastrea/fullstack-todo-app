import bcrypt from 'bcrypt';
import { User } from '../models/User';

export function validateSignUp(name, email, password) {
  if (!name && !email && !password) throw new Error('emptyFields');
  if (!name) throw new Error('emptyName');
  if (!email) throw new Error('emptyEmail');
  if (!password) throw new Error('emptyPassword');
  if (password.length < 8) throw new Error('shortPassword');
}

export async function verifyName(name) {
  const userExists = await User.findOne({
    where: {
      name,
    },
  });
  if (userExists) throw new Error('nameTaken');
}

export async function verifyEmail(email) {
  const userExists = await User.findOne({
    where: {
      email,
    },
  });
  if (userExists) throw new Error('emailTaken');
}

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

export async function createUser(name, email, password) {
  await User.create({
    name,
    email,
    password,
  });
  const newUser = User.findOne({
    attributes: ['name', 'email'],
    where: {
      name,
    },
  });
  return newUser;
}

export const signUpService = {
  async signUp(name, email, password) {
    validateSignUp(name, email, password);
    await verifyName(name);
    await verifyEmail(email);
    const hashedPassword = await hashPassword(password);
    const newUser = await createUser(name, email, hashedPassword);
    return newUser;
  },
};
