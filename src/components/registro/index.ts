import { Router } from "express";
import * as controller from "./controller"

const userRouter: Router = Router();

userRouter.post("/", controller.Registro);

export default userRouter;