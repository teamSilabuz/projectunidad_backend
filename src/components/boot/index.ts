import { Router } from "express";
import * as controller from "./controller";

const bootRouter: Router = Router();

bootRouter.post("/sms", controller.SendSMS);
bootRouter.post("/email", controller.SendEmail);

export default bootRouter;