import validator from 'validator';

export default function validateSignIn({
  email, password, setShowError, setErrorMessage,
}) {
  if (
    validator.isEmpty(email)
    && validator.isEmpty(password)
  ) {
    setShowError(true);
    return setErrorMessage('All fields are required.');
  }
  if (!validator.isEmail(email)) {
    setShowError(true);
    return setErrorMessage('Email is required.');
  }
  if (validator.isEmpty(password)) {
    setShowError(true);
    return setErrorMessage('Password is required.');
  }
  setErrorMessage('');
  setShowError(false);
  return true;
}
