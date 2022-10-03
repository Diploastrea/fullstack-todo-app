import { config } from '../../config';

export const dbConfig = {
  development: {
    username: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    host: config.mysql.host,
    dialect: 'mysql',
    timezone: '+02:00',
  },
  test: {
    username: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    host: config.mysql.host,
    dialect: 'mysql',
    timezone: '+02:00',
  },
  production: {
    username: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    host: config.mysql.host,
    dialect: 'mysql',
    timezone: '+02:00',
  },
};
