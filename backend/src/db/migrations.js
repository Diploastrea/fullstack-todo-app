/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import { Sequelize } from 'sequelize';
import { SequelizeStorage, Umzug } from 'umzug';
import db from './models';

const { sequelize } = db;

const migrator = new Umzug({
  migrations: {
    glob: ['migrations/*.js', { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
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

const seeder = new Umzug({
  migrations: {
    glob: ['seeders/*.js', { cwd: __dirname }],
    resolve: ({ name, path, context }) => {
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

export const migrations = {
  async up() {
    await migrator.up();
    await seeder.up();
  },
  async down() {
    await seeder.down({ to: 0 });
    await migrator.down({ to: 0 });
  },
};
