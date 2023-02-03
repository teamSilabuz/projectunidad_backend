import type { Response, Request } from "express";
import { encryptPassword, comparePassword } from "../../libs/helpers";
import prisma from "../../datasource";
import { sign } from "../../libs/jwt";

export const Registro = async (req: Request, res: Response): Promise<Response> => {
    try {
        const data = req.body;

        if (data.re_password !== data.password) {
            return res.status(400).send({
                ok: false,
                message: "Las contraseñas deben de ser iguales"
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

export const login = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;

        const users = await prisma.user.findFirst({ where: { email } });
        if (!users) {
            return res.status(400).send({
                ok: false,
                error: "Usuario no encontrado"
            });
        }

        const compPasw = await comparePassword(password, users.password);
        if (!compPasw) {
            return res.status(400).send({
                ok: false,
                error: "Contraseña incorrecta"
            });
        }

        const token = sign({
            id: users.id,
            name: users.name,
            email: users.email
        });

        return res.status(200).send({
            ok: true,
            message: "Usuario logueado correctamente",
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: error
        });
    }
};


export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, phone_number } = req.body;

        const usuarioExiste = await prisma.user.findFirst({ where: { email } });
        if (!usuarioExiste) {
            return res.status(400).send({
                ok: false,
                error: "Ocurrio algun error",
            });
        }

        await prisma.user.update({
            where: { email },
            data: { name, email, phone_number },
        });

        return res.status(200).send({
            ok: true,
            message: "Usuario actualizado correctamente",
            updatedUser: {
                name,
                email,
                phone_number
            }
        });
        

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: error
        });
    }
};