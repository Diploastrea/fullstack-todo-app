import { Task } from '../../models/Task';

export async function createTask(description, priority, dueDate, userId) {
  await Task.create({
    description,
    priority,
    dueDate,
    userId,
  });
  const task = Task.findOne({
    attributes: { exclude: ['userId'] },
    where: {
      userId,
    },
    order: [['id', 'DESC']],
  });
  return task;
}

export const addTaskService = {
  async addTask(description, priority, dueDate, userId) {
    const task = await createTask(description, priority, dueDate, userId);
    return task;
  },
};
