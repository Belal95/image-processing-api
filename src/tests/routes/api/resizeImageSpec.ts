import supertest from 'supertest';
import app from '../../..';
import fs from 'fs-extra';
import path from 'path';

const request = supertest(app);
describe('resizeImage Route suit', (): void => {
  it('Fails to get image because of missing paramters', async (): Promise<void> => {
    const res = await request.get('/api/resizeImage');
    expect(res.statusCode).toBe(400);
  });

  it('Fails to find the image', async (): Promise<void> => {
    const res = await request.get(
      '/api/resizeImage?width=100&height=100&fileName=fakeName'
    );
    expect(res.statusCode).toBe(404);
  });

  it('succeed to convert an image to specified width & height', async (): Promise<void> => {
    const res = await request.get(
      '/api/resizeImage?width=100&height=100&fileName=fjord'
    );
    expect(res.statusCode).toBe(201);
  });

  it('succeed to get image from cache', async (): Promise<void> => {
    const res = await request.get(
      '/api/resizeImage?width=100&height=100&fileName=fjord'
    );
    expect(res.statusCode).toBe(203);
  });
});

afterAll(async (): Promise<void> => {
  await fs.remove(path.resolve('images/cache'));
});
