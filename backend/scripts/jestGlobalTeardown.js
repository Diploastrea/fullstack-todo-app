import { migrations } from '../src/db/migrations';

export default async () => {
  await migrations.down();
};
