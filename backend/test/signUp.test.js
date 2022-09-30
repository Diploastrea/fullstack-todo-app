import request from 'supertest';
import app from '../src/app';
import { User } from '../src/models/User';

const mockDb = {
  name: 'user',
  email: 'test@example.com',
  password: 'Password.',
};

jest.mock('../src/models/user');

beforeAll(() => jest.spyOn(User, 'findOne')
  .mockReturnValue(Promise.resolve({
    name: mockDb.name,
    email: mockDb.email,
    password: mockDb.password,
  })));

afterAll(() => jest.clearAllMocks());

describe('POST /api/register email tests', () => {
  it('responds with status code 409 given email is already taken', (done) => {
    const registerData = {
      name: 'anotherUser',
      email: 'test@example.com',
      password: 'Password.',
    };
    request(app)
      .post('/api/register')
      .send(registerData)
      .expect(409)
      .end((err, res) => {
        if (err) return done(err).expect(res.body.message).toEqual('Email is already taken.');
        return done();
      });
  });
});
