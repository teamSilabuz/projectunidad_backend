import { Router } from "express";
import * as controller from "./controller";

const bootRouter: Router = Router();

bootRouter.post("/sms", controller.SendSMS);

export default bootRouter;