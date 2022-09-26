import { signUpService } from '../services';
import { signUpErrors } from '../errors';

export const signUpController = {
  async signUpUser(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const response = await signUpService.signUp(name, email, password);
      res.status(201).json(response);
    } catch (error) {
      next({
        status: signUpErrors[error.message].status,
        message: signUpErrors[error.message].message,
      });
    }
  },
};
