const server = require('./serverBuild');
const request = require('supertest');

describe('serverBuild', () => {
  it ('root GET', async () => {
    const res = await request(server).get('/');

    expect(res.status).toBe(200);
  })

  it ('root GET res type json', async () => {
    const res = await request(server).get('/');

    expect(res.type).toMatch(/json/i);
  })

  it ('root GET returns JSON message', async () => {
    const res = await request(server).get('/');

    expect(res.body.message).toEqual('status 200: server fetch successful')
  })
})