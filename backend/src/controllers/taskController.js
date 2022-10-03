import { addTaskService } from '../services';

export const taskController = {
  async addTask(req, res, next) {
    try {
      const { description, priority, dueDate } = req.body;
      const { id: userId } = req.headers.user;
      const newTask = await addTaskService.addTask(description, priority, dueDate, userId);
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  },
};
