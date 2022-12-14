import { Task } from '../../models/Task';

export async function findTasks(userId) {
  const tasks = await Task.findAll({
    attributes: { exclude: ['userId'] },
    where: {
      userId,
    },
  });
  return tasks;
}

export const getTasksService = {
  async getTasks(userId) {
    const tasks = await findTasks(userId);
    return {
      userId,
      tasks,
    };
  },
};
