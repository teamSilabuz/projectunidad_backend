import type { Response, Request } from "express";
import { encryptPassword, comparePassword, encrypt } from "../../libs/helpers";
import prisma from "../../datasource";
import { sign } from "../../libs/jwt";

export const registro =  async (req:Request, res:Response) => {
    try {
        let data1 = req.body;

        const usuarioExiste = await prisma.user.findFirst({ where: { email: data1.email } });
        if (usuarioExiste) {
            return res.status(400).send({
                ok: false,
                error: "El usuario Existe",
            });
        }


        if (data1.re_password !== data1.password) {
            return res.status(400).send({
                ok: false,
                message: "Las contraseñas deben de ser iguales"
            });
        }
    
        delete data1.re_password;
    
        data1.password = await encryptPassword(data1.password);
    
        await prisma.user.create({
          data: {
            name: data1.name,
            email: data1.email,
            password: data1.password,
            phone_number: data1.phone_number,
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


export const updatedPassExterno = async (req: Request, res: Response): Promise<Response> => {
    try {
        let { id_credencial, passsword, re_password } = req.body;

        const registroExiste = await prisma.credencial_Externa.findFirst({ where: { id: id_credencial } });
        if (!registroExiste) {
            return res.status(400).send({
                ok: false,
                error: "Registro no encontrado",
            });
        }

        if (passsword !== re_password) {
            return res.status(400).send({
                ok: false,
                error: "Las contraseñas deben de ser iguales"
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