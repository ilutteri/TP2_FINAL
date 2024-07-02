import { Router } from "express";
import SondaController from "../controllers/SondaController.js";

const routes = Router();
const sondaController = new SondaController;

routes.post('/', sondaController.insertSonda);

routes.get('/', sondaController.getSondas);
routes.get('/:id', sondaController.getSondaById);



export default routes;