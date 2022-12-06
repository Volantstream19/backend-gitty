const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('posts routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  afterAll(() => {
    pool.end();
  });

  it('/api/v1/posts should return a list of posts', async () => {
    const resp = await request(app).get('/api/v1/posts');
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "post": "Hello this is my 1st post",
        },
        Object {
          "id": "2",
          "post": "Hello this is my 2nd post",
        },
        Object {
          "id": "3",
          "post": "Hello this is my 3rd post",
        },
      ]
    `);
  });
});
