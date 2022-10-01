import request from 'supertest';
import app from '../src/app';

describe('POST /api/register email tests: ', () => {
  it('responds with status code 409 given email is already taken', async () => {
    const registerData = {
      name: 'user',
      email: 'user1@example.com',
      password: 'Password.',
    };
    await request(app)
      .post('/api/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(409);
  });

  it('responds with status code 201 given email is already taken', async () => {
    const registerData = {
      name: 'user3',
      email: 'user3@example.com',
      password: 'Password.',
    };
    await request(app)
      .post('/api/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect('Content-type', /json/)
      .expect(201);
  });
});
