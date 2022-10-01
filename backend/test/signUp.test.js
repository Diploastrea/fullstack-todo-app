import request from 'supertest';
import app from '../src/app';

describe('POST /api/register email tests: ', () => {
  it('responds with status code 409 given email is already taken', (done) => {
    const registerData = {
      name: 'user',
      email: 'user1@example.com',
      password: 'Password.',
    };
    request(app)
      .post('/api/register')
      .send(registerData)
      .set('Accept', 'application/json')
      .expect(409, done);
  });
});
