import supertest from 'supertest';
import app from '../../..';

const request = supertest(app);

describe('test endpoint response', (): void => {
  it('gets the api endpoint', async (): Promise<void> => {
    const res = await request.get('/api');
    expect(res.statusCode).toBe(200);
  });
});
