import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";

/*
Llamar a la ruta "/api/v1/boot/sms"
Enviar los datos requeridos para obtener las credenciales externas:
    --> id_user: 1,
    --> id_credencial: 8

Obtenido las credenciales externas del usuario y ya validadas, se envía 
un sms con sus credenciales.
*/

describe("bootgmail", (): void => {
    it("Enviar correo electrónico con entradas validas", async () => {
        return request(app)
            .post("/api/v1/boot/email")
            .send({
                id_user: 1,
                id_credencial: 3,
                sandboxMode: true
            })
    })
})