import supertest from 'supertest';
import app from '../index';

describe('Test endpoint response', (): void => {
  const request = supertest(app);
  it('gets the index endpoint', async () => {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });
});
