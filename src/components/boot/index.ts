import { Router } from "express";
import * as controller from "./controller";

const bootRouter: Router = Router();

bootRouter.get("/", controller.SendSMS);

export default bootRouter;