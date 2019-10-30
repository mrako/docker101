const Supertest = require('supertest');

const app = require('./app');

const server = app.listen();
const request = new Supertest(server);

describe('Hello World', () => {
  after(() => {
    server.close();
  });

  it('should say "Hello World"', () => {
    request.get('/').expect(200).expect('Hello World');
  });
});
