import request from 'supertest';
import app from '../src/app';
import { migrations } from '../src/db/migrations';

beforeAll(async () => {
  await migrations.up();
});

afterAll(async () => {
  await migrations.down();
});

describe('POST /api/register email tests : ', () => {
  it('responds with status code 400 given email is already taken', (done) => {
    const registerData = {
      name: 'uniqueUser',
      email: 'user1@example.com',
      password: 'Password.',
    };
    request(app)
      .post('/api/register')
      .send(registerData)
      .expect(409)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.message).toEqual('Email is already taken.');
        return done();
      });
  });
});
