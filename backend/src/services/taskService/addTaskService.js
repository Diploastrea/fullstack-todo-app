import { Task } from '../../models/Task';

export async function add(description, priority, dueDate, userId) {
  await Task.create({
    description,
    priority,
    dueDate,
    userId,
  });
}

export const addTaskService = {
  async addTask(description, priority, dueDate, userId) {
    await add(description, priority, dueDate, userId);
    return { status: 'ok' };
  },
};
