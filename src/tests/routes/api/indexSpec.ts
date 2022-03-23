import supertest from 'supertest';
import app from '../../..';

const request = supertest(app);

describe('test endpoint response', () => {
  it('gets the api endpoint', async () => {
    const res = await request.get('/api');
    expect(res.statusCode).toBe(200);
  });
});
