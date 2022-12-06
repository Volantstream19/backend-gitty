const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/github');

describe('user routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('/api/v1/github/login should return redirect to github Oauth page', async () => {
    const resp = await request(app).get('/api/v1/github/login');
    expect(resp.header.location).toMatch(
      /https:\/\/github.com\/login\/oauth\/authorize\?client_id=[\w\d]+&scope=user&redirect_uri=http:\/\/localhost:7890\/api\/v1\/github\/callback/i
    );
  });

  it('/api/v1/github/callback logs in and redirects to dashboard and displays info', async () => {
    const resp = await request
      .agent(app)
      .get('/api/v1/github/callback?code=42')
      .redirects(1);

    expect(resp.body).toEqual({
      id: expect.any(String),
      login: 'fake_github_user',
      email: 'not-real@example.com',
      avatar: 'https://www.placecage.com/gif/300/300',
      iat: expect.any(Number),
      exp: expect.any(Number),
    });
  });
});
