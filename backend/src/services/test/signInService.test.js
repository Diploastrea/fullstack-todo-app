import { validateSignIn } from '../userService/signInService';

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
