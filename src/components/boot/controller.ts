import type { Request, Response } from "express";
<<<<<<< HEAD
import { PrismaClient } from "@prisma/client";
import { sendSMS } from "../../services";

const prisma = new PrismaClient();
=======
import prisma from "../../datasource";
import { sendSMS, sendEmail } from "../../services";
import { decrypt } from "../../libs/helpers";
>>>>>>> develop

export const SendSMS = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id_user, id_credencial } = req.body;

        let context = {};
        let status = 400;

        const resul = await prisma.gestor.findFirst({
            where: {
                id: id_user
            },
            include: {
                user: {
                    select: {
                        name: true,
                        phone_number: true
                    }
                },
                credencial_Externa: {
                    where: {
                        id: id_credencial
                    },
                    select: {
                        name: true,
                        username_ext: true,
                        password_ext: true
                    }
                }
            }
        })

        if (resul) {
            if (resul?.credencial_Externa.length) {
                const paramContext = {
                    user: resul.user,
                    credencialExt: resul.credencial_Externa[0]
                }

<<<<<<< HEAD
                const { body, from, to }: any = await sendSMS(paramContext);

                context = {
                    message: {
                        ok: true,
=======
                paramContext.credencialExt.password_ext = await decrypt(paramContext.credencialExt.password_ext);

                const { body, from, to }: any = await sendSMS(paramContext);

                context = {
                    ok: true,
                    message: {
>>>>>>> develop
                        body,
                        from,
                        to
                    }
                }

            } else {
                status = 401;
                context = {
                    ok: false,
                    error: "Ups! Error de solicitud de credencial",
                }
            }

        } else {
            status = 404;
            context = {
                ok: false,
                error: "Ups! El usuario no existe",
            }
        }
        res.status(status).json(context);

    } catch (error) {
        res.status(500).json({ error });
    }
<<<<<<< HEAD
=======
}

export const SendEmail = async (req: Request, res: Response): Promise<Response> => {

    try {
        const { id_user, id_credencial } = req.body;

        let context = {};
        let status = 400;

        const resul = await prisma.gestor.findFirst({
            where: {
                id: id_user
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true
                    }
                },
                credencial_Externa: {
                    where: {
                        id: id_credencial
                    },
                    select: {
                        name: true,
                        username_ext: true,
                        password_ext: true
                    }
                }
            }
        })

        if (resul) {
            if (resul?.credencial_Externa.length) {
                const paramContext = {
                    user: resul.user,
                    credencialExt: resul.credencial_Externa[0]
                }

                paramContext.credencialExt.password_ext = await decrypt(paramContext.credencialExt.password_ext);

                const message = await sendEmail(paramContext);

                context = {
                    ok: true,
                    message
                }

            } else {
                status = 401;
                context = {
                    ok: false,
                    error: "Ups! Error de solicitud de credencial",
                }
            }

        } else {
            status = 404;
            context = {
                ok: false,
                error: "Ups! El usuario no existe",
            }
        }
        return res.status(status).json(context);
    } catch (error) {
        return res.status(500).json({ error });
    }

>>>>>>> develop
}