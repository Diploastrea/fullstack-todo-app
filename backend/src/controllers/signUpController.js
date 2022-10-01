import { signUpService } from '../services';

export const signUpController = {
  async signUpUser(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const response = await signUpService.signUp(name, email, password);
      res.status(201).json(response);
    } catch (err) {
      next(err);
    }
  },
};
