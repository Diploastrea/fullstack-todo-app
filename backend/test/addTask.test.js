import request from 'supertest';
import app from '../src/app';
import { generateToken } from '../src/services/userService/signInService';

describe('POST /api/task', () => {
  const user = {
    id: 1,
    name: 'user',
  };
  const token = generateToken(user);

  it('responds with status code 422 given date in wrong format', async () => {
    const res = await request(app)
      .post('/api/task')
      .set('Authorization', `Bearer ${token}`)
      .send({
        description: 'Do laundry',
        priority: 'medium',
        dueDate: '03.10.22',
      });
    expect(res.status).toEqual(422);
    expect(res.body.message).toEqual('Please enter a date in YYYY-MM-DD format.');
  });

  it('responds with status code 422 given due date in the past', async () => {
    const res = await request(app)
      .post('/api/task')
      .set('Authorization', `Bearer ${token}`)
      .send({
        description: 'Do laundry',
        priority: 'medium',
        dueDate: '1999-01-01',
      });
    expect(res.status).toEqual(422);
    expect(res.body.message).toEqual('Please enter a valid date!');
  });

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
    // expect(res.body.message).toEqual('Please enter a date in YYYY-MM-DD format.');
  });
});
