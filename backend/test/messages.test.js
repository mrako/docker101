const assert = require('assert');

const Supertest = require('supertest');

const db = require('../src/db');
const app = require('../src/app');

const server = new Supertest(app.listen());

describe('Messages', () => {
  before(async () => {
    await db.sync({ force: true });
  });

  it('should create a new messages', async () => {
    const params = { message: 'test' };

    const response = await server.post('/api/messages').send(params).expect(201);
  });

  it('should return messages', async () => {
    const response = await server.get('/api/messages').expect(200);

    assert.strictEqual(response.body.results.length, 1);
    assert.strictEqual(response.body.results[0].message, 'test');
  });
});
