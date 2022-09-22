import { loginService } from '../services';
import { loginErrors } from '../errors';

export const loginController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await loginService.loginUser(email, password);
      res.status(200).json(user);
    } catch (error) {
      next({
        status: loginErrors[error.message].status,
        message: loginErrors[error.message].message,
      });
    }
  },
};