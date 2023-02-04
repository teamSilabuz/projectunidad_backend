import type { Response, Request } from "express";
import { encryptPassword, comparePassword, encrypt } from "../../libs/helpers";
import prisma from "../../datasource";
import { sign } from "../../libs/jwt";

export const registro =  async (req:Request, res:Response) => {
    try {
        const body = req.body;

        const usuarioExiste = await prisma.user.findFirst({ where: { email: body.email } });
        if (usuarioExiste) {
            return res.status(400).send({
                ok: false,
                message: "El usuario Existe",
            });
        }


        if (body.re_password !== body.password) {
            return res.status(400).send({
                ok: false,
                message: "Las contraseñas deben de ser iguales"
            });
        }
    
        delete body.re_password;
    
        body.password = await encryptPassword(body.password);
    
        await prisma.user.create({
          data: {
            name: body.name,
            email: body.email,
            password: body.password,
            phone_number: body.phone_number,
            gestors: {
              create: {}
            },
          }
        });
    
        return res.status(201).json({
            ok: true,
            message: "Usuario registrado correctamente"
        })
    } catch (error) {
        return res.status(500).json({ 
            ok: false, 
            message: error 
        });
    }
  };

export const login = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { email, password } = req.body;

        const users = await prisma.user.findFirst({ where: { email } });
        if (!users) {
            return res.status(400).send({
                ok: false,
                message: "Usuario no encontrado"
            });
        }

        const compPasw = await comparePassword(password, users.password);
        if (!compPasw) {
            return res.status(400).send({
                ok: false,
                message: "Contraseña incorrecta"
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
                message: "Ocurrio algun error",
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


export const updatedPassExterno = async (req: Request, res: Response): Promise<Response> => {
    try {
        let { id_credencial, passsword, re_password } = req.body;

        const registroExiste = await prisma.credencial_Externa.findFirst({ where: { id: id_credencial } });
        if (!registroExiste) {
            return res.status(400).send({
                ok: false,
                message: "Registro no encontrado",
            });
        }

        if (passsword !== re_password) {
            return res.status(400).send({
                ok: false,
                message: "Las contraseñas deben de ser iguales"
            });
        }

        const re_password1 = await encrypt(passsword);

        await prisma.credencial_Externa.update({
            where: { id: id_credencial },
            data: { 
                password_ext: re_password1
             },
        });

        return res.status(200).send({
            ok: true,
            message: "Usuario actualizado correctamente",
        });
        

    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: error
        });
    }
};