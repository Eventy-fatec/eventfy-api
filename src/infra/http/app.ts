import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { config } from 'dotenv-flow';

import '@infra/container';
import { errorsHandler } from '@core/domain/errors/handlers/ErrorsHandler';
import { routes } from './routes';

config({ silent: true });

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
app.use(errorsHandler);

export { app };
