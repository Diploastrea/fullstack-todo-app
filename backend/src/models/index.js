import { Task } from './Task';
import { User } from './User';

Task.belongsTo(User);
User.hasMany(Task);
