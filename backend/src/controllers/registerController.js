import { registerService } from '../services';
import { registerErrors } from '../errors';

export const registerController = {
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const data = await registerService.registerUser(name, email, password);
      res.status(201).json(data);
    } catch (error) {
      next({
        status: registerErrors[error.message].status,
        message: registerErrors[error.message].message,
      });
    }
  },
};
