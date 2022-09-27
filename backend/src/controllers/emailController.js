import { emailService } from '../services';
import { emailErrors } from '../errors';

export const emailController = {
  async verifyEmailToken(req, res, next) {
    try {
      const { token } = req.params;
      await emailService.verifyEmailToken(token);
      res.redirect('https://localhost:3000');
    } catch (error) {
      next({
        status: emailErrors[error.message].status,
        message: emailErrors[error.message].message,
      });
    }
  },
};
