import { resizeRoute } from './resizeImage';
import express from 'express';

const routes = express.Router();

routes.use('/resizeImage', resizeRoute);
routes.get('/', (_req: express.Request, res: express.Response): void => {
  res.status(200).send('Please enter /api/resizeImage route');
});

export default routes;
