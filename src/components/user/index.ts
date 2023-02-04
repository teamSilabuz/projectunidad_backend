import { Router } from "express";
import * as controller from "./controller"

const userRouter: Router = Router();

userRouter.post("/registro", controller.registro);
userRouter.post("/login", controller.login);
userRouter.put("/updateuser", controller.updateUser);
userRouter.put("/updatepassexterno", controller.updatedPassExterno);


export default userRouter;