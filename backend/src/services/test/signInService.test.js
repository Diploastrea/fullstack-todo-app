import jwt from 'jsonwebtoken';
import config from '../../config';
import { validateSignIn, generateToken } from '../userService/signInService';

test('validateSignIn given no args', () => {
  const fnc = () => validateSignIn();
  expect(fnc).toThrow('emptyFields');
});

test('validateSignIn given no email', () => {
  const email = '';
  const password = 'password';
  const fnc = () => validateSignIn(email, password);
  expect(fnc).toThrow('emptyEmail');
});

test('validateSignIn given no password', () => {
  const email = 'user@example.com';
  const password = '';
  const fnc = () => validateSignIn(email, password);
  expect(fnc).toThrow('emptyPassword');
});

test('validateSignIn given valid args', () => {
  const email = 'user@example.com';
  const password = 'password';
  const fnc = () => validateSignIn(email, password);
  expect(fnc).not.toThrow(Error);
});

test('generateToken returns signed token', () => {
  const user = {
    id: 1,
    name: 'Daniel',
  };
  const token = generateToken(user);
  const decoded = jwt.verify(token, config.access_secret);
  expect(decoded.id).toEqual(1);
  expect(decoded.name).toEqual('Daniel');
});
