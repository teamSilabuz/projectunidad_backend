import { Router } from "express";
import * as controller from "./controller";

const gestorRouter: Router = Router();

gestorRouter.get("/user/:id", controller.getCredentials);

export default gestorRouter;