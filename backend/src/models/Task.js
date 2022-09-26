import { DataTypes } from 'sequelize';
import { db } from '../data/connection';
import { User } from './User';

export const Task = db.define('task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNul: false,
  },
  priority: {
    type: DataTypes.ENUM,
    values: ['low', 'medium', 'high'],
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNul: false,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps: false,
});
