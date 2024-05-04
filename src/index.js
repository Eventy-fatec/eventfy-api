import express from 'express';
import { routes } from './routes/routes.js';

const app = express();
const port = 3000;

app.use(routes);

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
