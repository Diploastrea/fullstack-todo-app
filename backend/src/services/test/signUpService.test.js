import { validateSignUp, hashPassword } from '../userService/signUpService';

test('validateSignUp given no args', () => {
  const fnc = () => validateSignUp();
  expect(fnc).toThrow('emptyFields');
});

test('hashPassword returns value', async () => {
  const hashedPassword = await hashPassword('password');
  expect(hashedPassword).toEqual(expect.any(String));
});
