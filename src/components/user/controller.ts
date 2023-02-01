import type { Response, Request } from "express";
import { encryptPassword } from "../../libs/helpers";
import prisma from "../../datasource";


export const Registro = async(req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;

        if(data.re_password !== data.password) {
            return res.status(400).send({ 
                ok: false,
                mesagge: "Las contraseñas deben de ser iguales"
             });
        }

        delete data.re_password;

        data.password = await encryptPassword(data.password);

        await prisma.user.create({ data });

        return res.status(201).json({
            ok: true,
            message: "Usuario registrado correctamente"
        })
    } catch (error) {
        return res.status(500).json({ ok: false, message: error });
    }
};