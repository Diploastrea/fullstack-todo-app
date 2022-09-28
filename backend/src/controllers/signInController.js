import { signInService } from '../services';

export const signInController = {
  async signInUser(req, res, next) {
    try {
      const { email, password } = req.body;
      const token = await signInService.signIn(email, password);
      res.status(200).json(token);
    } catch (err) {
      next(err);
    }
  },
};
