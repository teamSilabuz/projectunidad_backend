import type { Request, Response } from "express";
import prisma from "../../datasource";

export const getCredentials =async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id: id_user }= req.params;
        
        const gestorExiste = await prisma.gestor.findMany({
            where:{
                user_id: Number(id_user)
            },
            include: {
                credencial_Externa: {
                    select:{
                        id: true,
                        url: true,
                        name:true,
                        username_ext:true,
                        createdAt:true,
                    }
                }
            },
        });

        return res.status(200).send({
            ok: true,
            message: gestorExiste,
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: error
        });
    }
}