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
  emptyPassword: {
    status: 422,
    message: 'Password is required.',
  },
  shortPassword: {
    status: 422,
    message: 'Password must be have least 8 characters.',
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
