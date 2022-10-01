import { DataTypes } from 'sequelize';
import { User } from './User';
import db from '../db/models/index';

const { sequelize } = db;

export const Task = sequelize.define('task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  priority: {
    type: DataTypes.ENUM,
    values: ['low', 'medium', 'high'],
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
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
