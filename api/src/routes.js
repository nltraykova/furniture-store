import { Router } from "express";
import userController from "./controllers/user.controller.js";
import furnitureController from "./controllers/furniture.controller.js";

const routes = Router();

//Users
routes.use('/users', userController);

//Furnitures
routes.use('/data', furnitureController);

export default routes;