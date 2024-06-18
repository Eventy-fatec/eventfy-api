import express from 'express';
import userRoutes from './user/user.routes.js';
import eventRoutes from './event/event.routes.js';
import loginRoutes from './login/login.routes.js';

const routes = express.Router();
routes.use(express.json());
routes.use('/users', userRoutes);
routes.use('/events', eventRoutes);
routes.use('/login', loginRoutes);

export default routes ;
