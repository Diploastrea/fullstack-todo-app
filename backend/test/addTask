import request from 'supertest';
import app from '../src/app';
import { migrations } from '../src/db/migrations';

beforeAll(async () => {
  await migrations.up();
});

afterAll(async () => {
  await migrations.down();
});

describe('POST /api/task with invalid args', () => {
  it('responds with status code 422 given date in wrong format', async () => {
    const res = await request(app)
      .post('/api/task')
      .send({
        description: 'Do laundry',
        priority: 'medium',
        dueDate: '03/10/2022',
      });
    expect(res.status).toEqual(422);
    expect(res.body.message).toEqual('Please enter a date in YYYY-MM-DD format.');
  });

  it('responds with status code 422 given due date in the past', async () => {
    const res = await request(app)
      .post('/api/task')
      .send({
        description: 'Do laundry',
        priority: 'medium',
        dueDate: '1999-01-01',
      });
    expect(res.status).toEqual(422);
    expect(res.body.message).toEqual('Please enter a valid date!');
  });
});

describe('POST /api/task with valid args', () => {
  it('responds with status code 201 and new task', async () => {
    const res = await request(app)
      .post('/api/task')
      .send({
        description: 'Do laundry',
        priority: 'medium',
        dueDate: '2025-01-01',
      });
    expect(res.status).toEqual(201);
    // expect(res.body.message).toEqual('Please enter a date in YYYY-MM-DD format.');
  });
});
