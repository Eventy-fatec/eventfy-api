import { Router } from "express";
import LoginController from "../../controllers/login/login.controller.js";

const loginRoutes = Router();
loginRoutes.post('/', LoginController.post);

export default loginRoutes;