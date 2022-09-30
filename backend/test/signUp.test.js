import request from 'supertest';
import app from '../src/app';

describe('POST /api/register email tests', () => {
  it('responds with status code 409 given email is already taken', async () => {
    const registerData = {
      name: 'uniqueUser',
      email: 'user1@example.com',
      password: 'Password.',
    };
    const { body } = await request(app)
      .post('/api/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(409);
    expect(body.message).toEqual('Email is already taken.');
  });
});
