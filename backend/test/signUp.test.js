import request from 'supertest';
import app from '../src/app';

describe('POST /api/register with invalid args', () => {
  it('responds with status code 409 given taken name', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        name: 'user1',
        email: 'uniqueEmail@example.com',
        password: 'Password.',
      });
    expect(res.status).toEqual(409);
    expect(res.body.message).toEqual('Name is already taken.');
  });

  it('responds with status code 409 given taken email', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        name: 'uniqueUser',
        email: 'user1@example.com',
        password: 'Password.',
      });
    expect(res.status).toEqual(409);
    expect(res.body.message).toEqual('Email is already taken.');
  });

  it('responds with status code 201 and new user', async () => {
    const res = await request(app)
      .post('/api/register')
      .send({
        name: 'uniqueUser',
        email: 'uniqueEmail@example.com',
        password: 'Password.',
      });
    expect(res.status).toEqual(201);
    expect(res.body.id).toEqual(expect.any(Number));
    expect(res.body.email).toEqual('uniqueEmail@example.com');
    expect(res.body.isVerified).toEqual(false);
  });
});
