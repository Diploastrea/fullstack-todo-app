import { signInService } from '../services';
import { signInErrors } from '../errors';

export const signInController = {
  async signInUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await signInService.signIn(email, password);
      res.status(200).json(token);
    } catch (error) {
      next({
        status: signInErrors[error.message].status,
        message: signInErrors[error.message].message,
      });
    }
  },
};
