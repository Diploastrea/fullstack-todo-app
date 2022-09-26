export const signUpErrors = {
  emptyFields: {
    status: 422,
    message: 'All fields are required.',
  },
  emptyName: {
    status: 422,
    message: 'Name is required.',
  },
  emptyEmail: {
    status: 422,
    message: 'Email is required.',
  },
  invalidEmail: {
    status: 422,
    message: 'Provided email is invalid.',
  },
  emptyPassword: {
    status: 422,
    message: 'Password is required.',
  },
  invalidPassword: {
    status: 422,
    message: 'Password must have at least 8 characters, including 1 uppercase letter and 1 symbol.',
  },
  nameTaken: {
    status: 409,
    message: 'Name is already taken.',
  },
  emailTaken: {
    status: 409,
    message: 'Email is already taken.',
  },
};
