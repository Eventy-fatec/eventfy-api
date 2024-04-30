import express from 'express';
import { userRoutes } from './user/user-routes.js';

const routes = express.Router();
routes.use(express.json());
routes.use('/users', userRoutes);

export { routes };
