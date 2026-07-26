import { Router } from "express";
import furnitureController from "./controllers/furniture.controller.js";

const routes = Router();

routes.use('/data', furnitureController)

export default routes;