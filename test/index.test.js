const request = require('supertest');
const app  = require('../src/app');

test('/', async () => {

  const response = await request(app).get('/');

  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/^text\/html;/);
  expect(response.text).toBe('Hello NodeJs !');

});

test('/env', async () => {

  const response = await request(app).get('/env');

  expect(response.status).toBe(200);
  expect(response.headers['content-type']).toMatch(/^application\/json;/);

  const env = JSON.parse(response.text);

  expect(env).toHaveProperty('npm_package_name', 'hello-nodejs');

});
