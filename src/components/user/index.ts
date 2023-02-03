import { Router } from "express";
import * as controller from "./controller"

const userRouter: Router = Router();

userRouter.post("/registro", controller.Registro);
userRouter.post("/login", controller.login);
userRouter.put("/updateuser", controller.updateUser);

export default userRouter;