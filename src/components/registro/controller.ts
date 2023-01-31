import type { Response, Request } from "express";
import { PrismaClient } from "@prisma/client";
import { encryptPassword } from "../../libs/helpers";

const prisma = new PrismaClient();


export const Registro = async (req: Request, res: Response): Promise<void> => {
    try {
        const data = req.body;

        data.password = await encryptPassword(data.password);

        await prisma.user.create({ data });

        res.status(201).json({
            ok: true,
            message: "Usuario registrado correctamente"
        })
    } catch (error) {
        res.status(500).json({ ok: false, message: error });
    }
};