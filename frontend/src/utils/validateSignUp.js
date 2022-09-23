import validator from 'validator';

export default function validateSignUp({
  name, email, password, passwordConfirmation, setShowError, setErrorMessage,
}) {
  if (
    validator.isEmpty(name)
    && validator.isEmpty(email)
    && validator.isEmpty(password)
    && validator.isEmpty(passwordConfirmation)
  ) {
    setShowError(true);
    return setErrorMessage('All fields are required.');
  }
  if (validator.isEmpty(name)) {
    setShowError(true);
    return setErrorMessage('Name is required.');
  }
  if (!validator.isEmail(email)) {
    setShowError(true);
    return setErrorMessage('Email is required.');
  }
  if (validator.isEmpty(password)) {
    setShowError(true);
    return setErrorMessage('Password is required.');
  }
  if (validator.isEmpty(passwordConfirmation)) {
    setShowError(true);
    return setErrorMessage('Password confirmation is required.');
  }
  if (!validator.isStrongPassword(password, { minNumbers: 0 })) {
    setShowError(true);
    return setErrorMessage('Password must have at least 8 characters, including 1 uppercase letter and 1 symbol.');
  }
  if (password !== passwordConfirmation) {
    setShowError(true);
    return setErrorMessage('Passwords do not match.');
  }
  setErrorMessage('');
  setShowError(false);
  return true;
}
