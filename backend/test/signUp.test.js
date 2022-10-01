import request from 'supertest';
import app from '../src/app';
import { migrations } from '../src/db/migrations';

beforeAll(async () => {
  await migrations.up();
});

afterAll(async () => {
  await migrations.down();
});

test('responds with status code 409 given taken email', (done) => {
  request(app)
    .post('/api/register')
    .send({
      name: 'uniqueUser',
      email: 'user1@example.com',
      password: 'Password.',
    })
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(409)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.body.message).toEqual('Email is already taken.');
      return done();
    });
});
