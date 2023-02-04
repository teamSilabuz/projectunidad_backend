import { Router } from "express";
import * as controller from "./controller";

const credencialRouter: Router = Router();

credencialRouter.post("/externo", controller.registro);



export default credencialRouter;