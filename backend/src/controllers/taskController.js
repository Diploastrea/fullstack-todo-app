import { getTasksService, addTaskService } from '../services';

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

  async getTasks(req, res, next) {
    try {
      const { id: userId } = req.headers.user;
      const tasks = await getTasksService.getTasks(userId);
      res.status(200).json(tasks);
    } catch (err) {
      next(err);
    }
  },
};
