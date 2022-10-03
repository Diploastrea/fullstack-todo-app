export const errorMessages = {
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
  incorrectCredentials: {
    status: 401,
    message: 'Email or password is incorrect.',
  },
  invalidToken: {
    status: 401,
    message: 'Email verification failed! Please try again.',
  },
  invalidPriority: {
    status: 422,
    message: 'Priority must be low, medium or high.',
  },
  invalidDateFormat: {
    status: 422,
    message: 'Please enter a date in YYYY-MM-DD format.',
  },
  invalidDate: {
    status: 422,
    message: 'Please enter a valid date!',
  },
};
