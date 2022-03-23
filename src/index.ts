import express from 'express';
import * as dotenv from 'dotenv';
import routes from './routes/api';

dotenv.config();
const app = express();
const PORT = 3000;

app.use('/api', routes);
app.get('/', (_req, res) => {
  res
    .status(200)
    .send('Hello, to resizeing app. <br> Please enter /api/resizeImage route');
});

app.listen(PORT, () => console.log(`Server started on port ${3000}`));

export default app;
