import { migrations } from '../src/db/migrations';

const { migrator, seeder } = migrations;

export default async () => {
  await seeder.down({ migrations: ['20220926201618-add-tasks.js', '20220922155118-add-users.js'] });
  await migrator.down({ to: 0 });
};
