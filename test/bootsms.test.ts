import { describe, expect, it, } from "vitest";
import request from "supertest";
import app from "../src/app";

/*
Llamar a la ruta: "/api/v1/boot/sms"
Enviar los datos requeridos para obtener las credenciales externas:
    --> id_user: 1,
    --> id_credencial: 8

Obtenido las credenciales externas del usuario y ya validadas, se envía 
un correo con sus credenciales.
*/

describe("bootsms", (): void => {
    it("Enviar email con entradas validas", async () => {
        return request(app)
            .post("/api/v1/boot/sms")
            .send({
                id_user: 1,
                id_credencial: 8
            })
    })
})