import { type Application, Router } from "express";
import * as controller from "../components";

const listRouter: [string, Router][] = [
    ["boot", controller.BootRouter],
    ["registro", controller.UserRouter],
];

const routes = (app: Application) => {
    listRouter.forEach(([path, controller]) => {
        app.use(`/api/v1/${path}`, controller)
    });
}

export default routes;