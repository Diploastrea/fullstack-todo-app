import { emailService } from '../services';
import { emailErrors } from '../errors';

export const emailController = {
  async verifyEmailToken(req, res, next) {
    try {
      const { token } = req.params;
      const response = await emailService.verifyEmailToken(token);
      res.status(200).json(response);
    } catch (error) {
      next({
        status: emailErrors[error.message].status,
        message: emailErrors[error.message].message,
      });
    }
  },
};
