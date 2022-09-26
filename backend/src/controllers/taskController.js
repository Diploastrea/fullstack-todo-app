import { addTaskService } from '../services';
import { taskErrors } from '../errors';

export const taskController = {
  async addTask(req, res, next) {
    try {
      const { description, priority, dueDate } = req.body;
      const { id: userId } = req.headers.user;
      await addTaskService.addTask(description, priority, dueDate, userId);
      res.status(201);
    } catch (error) {
      next({
        status: taskErrors[error.message].status,
        message: taskErrors[error.message].message,
      });
    }
  },
};
