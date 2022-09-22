export const registerErrors = {
  emptyFields: {
    status: 400,
    message: 'All fields are required.',
  },
  emptyName: {
    status: 400,
    message: 'Name is required.',
  },
  emptyEmail: {
    status: 400,
    message: 'Email is required.',
  },
  emptyPassword: {
    status: 400,
    message: 'Password is required.',
  },
  shortPassword: {
    status: 400,
    message: 'Password must be have least 8 characters.',
  },
};
