import { migrations } from '../src/db/migrations';

const { migrator, seeder } = migrations;

export default async () => {
  await migrator.up();
  await seeder.up();
};
