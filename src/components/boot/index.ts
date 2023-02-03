import { Router } from "express";
import * as controller from "./controller";

const bootRouter: Router = Router();

bootRouter.post("/sms", controller.SendSMS);
<<<<<<< HEAD
=======
bootRouter.post("/email", controller.SendEmail);
>>>>>>> develop

export default bootRouter;