import request from 'supertest';
import app from '../src/app';
import { User } from '../src/models/User';

const mockDb = {
  email: 'daniel@example.com',
  password: '$2a$10$cMZtVjPNLmvrnnafdLOAo.0E8r6Cly3HNj5HTXFnYoOHtjPpmBwxe',
};

jest.mock('../src/models/User.js');

beforeAll(() => jest.spyOn(User, 'findOne')
  .mockReturnValue(Promise.resolve({
    email: mockDb.email,
    password: mockDb.password,
  })));

afterAll(() => jest.clearAllMocks());

describe('POST /api/register email tests', () => {
  it('responds with status code 200 given valid credentials', (done) => {
    request(app)
      .post('/api/login')
      .send({
        email: 'danifdas@example.com',
        password: '1111',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).toHaveProperty('status', 'ok');
        expect(res.body).toHaveProperty('token', expect.any(String));
        return done();
      });
  });
});
