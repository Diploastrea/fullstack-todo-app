import bcrypt from 'bcrypt';
import validator from 'validator';
import { emailService } from '../emailService/emailService';
import { User } from '../../models/User';

export function validateSignUp(name, email, password) {
  if (!name && !email && !password) throw new Error('emptyFields');
  if (!name) throw new Error('emptyName');
  if (!email) throw new Error('emptyEmail');
  if (!validator.isEmail(email)) throw new Error('invalidEmail');
  if (!password) throw new Error('emptyPassword');
  if (!validator.isStrongPassword(password, { minNumbers: 0 })) throw new Error('invalidPassword');
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
  const newUser = await User.findOne({
    attributes: ['id', 'email', 'isVerified'],
    where: {
      email,
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
    emailService.sendEmail(newUser.id, name, email);
    return newUser;
  },
};
