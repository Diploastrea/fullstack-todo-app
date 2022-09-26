import { addTaskService } from '../services';
import { taskErrors } from '../errors';

export const taskController = {
  async addTask(req, res, next) {
    try {
      const { name, email, password } = req.body;
      await addTaskService.addTask(name, email, password);
      res.status(201);
    } catch (error) {
      next({
        status: taskErrors[error.message].status,
        message: taskErrors[error.message].message,
      });
    }
  },
};
