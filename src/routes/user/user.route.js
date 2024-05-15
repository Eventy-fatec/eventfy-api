import { Router } from 'express';
import UserController from '../../controllers/user/user.controller.js';
import { createUserValidator, updateUserValidator, deleteUserValidator } from '../../validators/user.validator.js';

const userRoutes = Router();
userRoutes.get('/', UserController.get);
userRoutes.get('/:id', UserController.find);
userRoutes.post('/', createUserValidator, UserController.post);
userRoutes.put('/:id', updateUserValidator, UserController.put);
userRoutes.delete('/:id', deleteUserValidator, UserController.delete);

export default userRoutes;
