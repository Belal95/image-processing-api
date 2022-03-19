import express from 'express';
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello, wolrd.');
});

app.listen(port, () => console.log(`Server started on port ${3000}`));

export default app;
