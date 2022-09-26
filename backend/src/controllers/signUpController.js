import { signUpService } from '../services';
import { signUpErrors } from '../errors';

export const signUpController = {
  async signUpUser(req, res, next) {
    try {
      const { name, email, password } = req.body;
      await signUpService.signUp(name, email, password);
      res.status(201);
    } catch (error) {
      next({
        status: signUpErrors[error.message].status,
        message: signUpErrors[error.message].message,
      });
    }
  },
};
