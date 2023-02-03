import { Router } from "express";
import * as controller from "./controller"

const userRouter: Router = Router();

userRouter.post("/registro", controller.Registro);
<<<<<<< HEAD
=======
userRouter.post("/login", controller.login);
userRouter.put("/updateuser", controller.updateUser);
>>>>>>> develop

export default userRouter;