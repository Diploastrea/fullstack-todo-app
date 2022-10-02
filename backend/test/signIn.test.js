import request from 'supertest';
import app from '../src/app';
import { migrations } from '../src/db/migrations';

beforeAll(async () => {
  await migrations.up();
});

afterAll(async () => {
  await migrations.down();
});

describe('POST /api/login with incorrect credentials', () => {
  it('responds with status code 401 given incorrect email', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'email@example.com',
        password: 'Password.',
      });
    expect(res.status).toEqual(401);
    expect(res.body.message).toEqual('Email or password is incorrect.');
  });
});
