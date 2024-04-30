import { Router } from 'express';
import { UserController } from '../../controllers/user/user.controller.js';

const userRoutes = Router();
userRoutes.get('/', UserController.get);

userRoutes.get('/:id', UserController.find);

userRoutes.post('/', UserController.post);

userRoutes.put('/:id', UserController.put);

export { userRoutes };
