export const loginErrors = {
  emptyFields: {
    status: 422,
    message: 'All fields are required.',
  },
  emptyEmail: {
    status: 422,
    message: 'Email is required.',
  },
  emptyPassword: {
    status: 422,
    message: 'Password is required.',
  },
  incorrectCredentials: {
    status: 401,
    message: 'Email or password is incorrect.',
  },
};
