import { Route } from "express";
import LoginController from "../../controllers/login/login.controller";

const loginRoutes = Route();
userRoutes.post('', LoginController.post);

export default loginRoutes;