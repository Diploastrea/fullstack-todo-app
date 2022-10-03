import { migrations } from '../src/db/migrations';

const { migrator, seeder } = migrations;

export default async () => {
  await seeder.down({ to: 0 });
  await migrator.down({ to: 0 });
};
