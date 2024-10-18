const request = require('supertest');
const app = require('../index');

let server;

beforeAll((done) => {
  server = app.listen(4000, () => {
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe('GET /', () => {
  it('responds with Hello World', async () => {
    await request(server)
      .get('/')
      .expect(200)
      .expect('Hello World');
  });
});
