import request from 'supertest';
import app from '../src/app';
import { generateToken } from '../src/services/userService/signInService';

describe('GET /api/tasks', () => {
  const user1 = {
    id: 1,
    name: 'user',
  };
  const token1 = generateToken(user1);

  const user2 = { ...user1, id: 2 };
  const token2 = generateToken(user2);

  it('responds with status code 200 and user tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token1}`);
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body.tasks)).toEqual(true);
    expect(res.body.tasks.length).toEqual(2);
  });

  it('responds with status code 200 and no tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', `Bearer ${token2}`);
    expect(res.status).toEqual(200);
    expect(Array.isArray(res.body.tasks)).toEqual(true);
    expect(res.body.tasks.length).toEqual(0);
  });
});
