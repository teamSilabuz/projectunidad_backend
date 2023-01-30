import type { Request, Response } from "express";

export const SendSMS = async (req: Request, res: Response): Promise<void> => {
    res.send({
        ok: true,
        message: "envio sms correcto"
    })
}