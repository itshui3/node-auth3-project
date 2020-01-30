const server = require('../serverBuild');
const request = require('supertest');

describe.skip('api router tests', () => {

  it ('/api GET returns status 200', async () => {
    const { status } = await request(server).get('/api');

    expect(status).toBe(200);
  })

  it ('/api GET return type JSON', async () => {
    const { type } = await request(server).get('/api');

    expect(type).toMatch(/json/i);
  })

  it ('/api GET return message body', async () => {
    const { body } = await request(server).get('/api');

    expect(body.message).toBe('welcome to api');
  })

})