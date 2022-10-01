import { validateSignUp, hashPassword } from '../userService/signUpService';

test('validateSignUp given no args', () => {
  const fnc = () => validateSignUp();
  expect(fnc).toThrow('emptyFields');
});

test('validateSignUp given no name', () => {
  const name = '';
  const email = 'test@example.com';
  const password = 'Password.';
  const fnc = () => validateSignUp(name, email, password);
  expect(fnc).toThrow('emptyName');
});

test('validateSignUp given no email', () => {
  const name = 'user';
  const email = '';
  const password = 'Password.';
  const fnc = () => validateSignUp(name, email, password);
  expect(fnc).toThrow('emptyEmail');
});

test('validateSignUp given invalid email', () => {
  const name = 'user';
  const email = 'www.google.com';
  const password = 'Password.';
  const fnc = () => validateSignUp(name, email, password);
  expect(fnc).toThrow('invalidEmail');
});

test('validateSignUp given no password', () => {
  const name = 'user';
  const email = 'test@example.com';
  const password = '';
  const fnc = () => validateSignUp(name, email, password);
  expect(fnc).toThrow('emptyPassword');
});

test('validateSignUp given weak password', () => {
  const name = 'user';
  const email = 'test@example.com';
  const password = 'password';
  const fnc = () => validateSignUp(name, email, password);
  expect(fnc).toThrow('invalidPassword');
});

test('validateSignUp given valid args', () => {
  const name = 'user';
  const email = 'test@example.com';
  const password = 'Password.';
  const fnc = () => validateSignUp(name, email, password);
  expect(fnc).not.toThrow(Error);
});

test('hashPassword returns value', async () => {
  const hashedPassword = await hashPassword('password');
  expect(hashedPassword).toEqual(expect.any(String));
});
