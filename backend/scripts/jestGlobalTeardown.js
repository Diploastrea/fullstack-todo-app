import { migrations } from '../src/db/migrations';

const { migrator, seeder } = migrations;

export default async () => {
  await seeder.down();
  await migrator.down();
  await seeder.down();
  await migrator.down();
};
