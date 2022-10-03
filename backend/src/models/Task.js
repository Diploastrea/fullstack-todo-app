import validator from 'validator';
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
    allowNull: false,
    values: ['low', 'medium', 'high'],
    validate: {
      isIn: {
        args: [['low', 'medium', 'high']],
        msg: 'Priority must be low, medium or high.',
      },
    },
  },
  dueDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      customValidator(value) {
        if (!validator.isDate(value, { format: 'YYYY-MM-DD', strictMode: true })) {
          throw new Error('Please enter a date in YYYY-MM-DD format.');
        }
        if (new Date(value) < new Date(new Date().toDateString())) {
          throw new Error('Please enter a valid date!');
        }
      },
    },
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
