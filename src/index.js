import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { routes } from './routes/routes.js';
import swaggerDocs from './swagger.json' with {type: "json"};


const app = express();
const port = 3001;

app.use(routes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server rodando em http://localhost:${port}`);
});
