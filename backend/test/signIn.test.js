import request from 'supertest';
import app from '../src/app';

describe('POST /api/login with incorrect credentials', () => {
  it('responds with status code 401 given incorrect email', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'incorrectEmail@example.com',
        password: 'Password.',
      });
    expect(res.status).toEqual(401);
    expect(res.body.message).toEqual('Email or password is incorrect.');
  });

  it('responds with status code 401 given incorrect password', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'user1@example.com',
        password: 'incorrectPassword',
      });
    expect(res.status).toEqual(401);
    expect(res.body.message).toEqual('Email or password is incorrect.');
  });
});

describe('POST /api/login with correct credentials', () => {
  it('responds with status code 200 given correct credentials', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({
        email: 'user1@example.com',
        password: 'Password.',
      });
    expect(res.status).toEqual(200);
    expect(res.body.status).toEqual('ok');
    expect(res.body.token).toEqual(expect.any(String));
  });
});
