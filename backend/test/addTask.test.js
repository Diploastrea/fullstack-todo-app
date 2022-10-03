import request from 'supertest';
import app from '../src/app';
import { generateToken } from '../src/services/userService/signInService';

describe('POST /api/task', () => {
  const user = {
    id: 1,
    name: 'user',
  };
  const token = generateToken(user);

  it('responds with status code 201 and new task', async () => {
    const res = await request(app)
      .post('/api/task')
      .set('Authorization', `Bearer ${token}`)
      .send({
        description: 'Do laundry',
        priority: 'medium',
        dueDate: '2025-01-01',
      });
    expect(res.status).toEqual(201);
    expect(res.body.description).toEqual('Do laundry');
    expect(res.body.priority).toEqual('medium');
    expect(res.body.dueDate).toEqual('2025-01-01');
  });
});
