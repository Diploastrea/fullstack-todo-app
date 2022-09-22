export function validateRegistration(name, email, password) {
  if (!name && !email && !password) throw new Error('emptyFields');
  if (!name) throw new Error('emptyName');
  if (!email) throw new Error('emptyEmail');
  if (!password) throw new Error('emptyPassword');
  if (password.length < 8) throw new Error('shortPassword');
}
