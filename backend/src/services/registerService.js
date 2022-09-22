import { validateRegistration } from '../utils';

export const registerService = {
  async registerUser(name, email, password) {
    validateRegistration(name, email, password);
    return { status: 'success' };
  },
};
