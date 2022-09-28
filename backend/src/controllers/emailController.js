import { emailService } from '../services';

export const emailController = {
  async verifyEmailToken(req, res, next) {
    try {
      const { token } = req.params;
      const response = await emailService.verifyEmailToken(token);
      res.status(200).json(response);
    } catch (err) {
      next(err);
    }
  },
};
