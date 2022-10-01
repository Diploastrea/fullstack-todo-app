import { Sequelize } from 'sequelize';
import { SequelizeStorage, Umzug } from 'umzug';
import logger from './logger';
import app from './app';
import config from './config';
import db from './db/models';

require('dotenv/config');

const { sequelize } = db;

const umzug = new Umzug({
  migrations: {
    glob: ['db/migrations/*.js', { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
      // adjust the migration parameters Umzug will
      // pass to migration methods, this is done because
      // Sequilize-CLI generates migrations that require
      // two parameters be passed to the up and down methods
      // but by default Umzug will only pass the first
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const migration = require(path || '');
      return {
        name,
        up: async () => migration.up(context, Sequelize),
        down: async () => migration.down(context, Sequelize),
      };
    },
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});
const umzug2 = new Umzug({
  migrations: {
    glob: ['db/seeders/*.js', { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
      // adjust the migration parameters Umzug will
      // pass to migration methods, this is done because
      // Sequilize-CLI generates migrations that require
      // two parameters be passed to the up and down methods
      // but by default Umzug will only pass the first
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const migration = require(path || '');
      return {
        name,
        up: async () => migration.up(context, Sequelize),
        down: async () => migration.down(context, Sequelize),
      };
    },
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console,
});
(async () => {
  await umzug.up();
  await umzug2.up();
})();

const PORT = config.port || 8080;

app.listen(PORT, () => {
  logger.info(`App is listening on ${PORT}`);
});
