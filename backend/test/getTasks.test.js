import request from 'supertest';
import app from '../src/app';
import { generateToken } from '../src/services/userService/signInService';

describe('GET /api/tasks', () => {
  const user = {
    id: 1,
    name: 'user',
  };
  const token = generateToken(user);

  it('responds with status code 200 and user tasks', async () => {
    const res = await request(app)
      .get('/api/task')
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toEqual(200);
    expect(res.body.tasks).toEqual(Array);
    expect(res.body.tasks.length).toEqual(2);
  });
});
