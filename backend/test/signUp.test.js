import request from 'supertest';
import app from '../src/app';
import { User } from '../src/models/User';

afterAll(() => jest.clearAllMocks());

describe('POST /api/register email tests : ', () => {
  it('responds with status code 400 given email is already taken', (done) => {
    const mockFn = jest.fn();
    mockFn.mockReturnValue({
      name: 'uniqueUser',
      email: 'test@example.com',
      password: 'Password.',
    });
    User.findOne = mockFn;
    const registerData = {
      name: 'user',
      email: 'test@example.com',
      password: 'Password.',
    };
    request(app)
      .post('/api/register')
      .send(registerData)
      .expect(409)
      .end((err, res) => {
        if (err) return done(err).expect(res.body.message).toEqual('Email is already taken.');
        console.log(res.body);
        return done();
      });
  });
});
