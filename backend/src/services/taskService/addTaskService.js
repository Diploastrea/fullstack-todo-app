import validator from 'validator';
import { Task } from '../../models/Task';

export function validatePriority(priority) {
  const enums = ['low', 'medium', 'high'];
  if (!enums.includes(priority)) throw new Error('invalidPriority');
}

export function validateDate(dueDate) {
  if (!validator.isDate(dueDate, { format: 'YYYY-MM-DD', strictMode: true })) {
    throw new Error('invalidDateFormat');
  }
  if (new Date(dueDate) < new Date(new Date().toDateString())) {
    throw new Error('invalidDate');
  }
}

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
    validatePriority(priority);
    validateDate(dueDate);
    const task = await createTask(description, priority, dueDate, userId);
    return task;
  },
};
