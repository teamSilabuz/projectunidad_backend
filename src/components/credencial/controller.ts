import type { Request, Response } from "express";
import prisma from "../../datasource";
import { encrypt } from "../../libs/helpers";

export const registro = async (req: Request, res: Response): Promise<Response> => {
  try {
    const data = req.body;
    
     data.password_ext = await encrypt(data.password_ext);

    await prisma.credencial_Externa.create({
      data: {
        url: data.url,
        name: data.name,
        username_ext: data.username_ext,
        password_ext: data.password_ext,
        gestors: {
          connect: [{ id: Number(data.id_gestor) }],
        },
      },
    });
    return res.status(201).json({
      ok: true,
      message: "registrado sitio externo correctamente"
    })
  } catch (error) {
    return res.status(500).json({ ok: false, message: error });
  }
}