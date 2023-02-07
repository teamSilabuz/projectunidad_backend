import { describe, expect, it, } from "vitest";
import request from "supertest";
import app from "../src/app";

/*
Validar que el envío sms de las credenciales del sitio Web de un usuario que lo solicita, 
se efectúe satisfactoriamente, a través de la siguiente solicitud:

    1. Method: POST: "/api/v1/boot/sms"

Los parámetros a enviar y que deben ser evaluados son los siguientes:

    - Enviar sms con entradas validas

    - Enviar sms con entradas no válidas

    - Enviar sms de las credenciales de un Sitio Web cuando el id_user que lo esta solicitando no existe en la DB
    
    - Enviar sms de las credenciales de un Sitio Web cuando el usuario que lo esta solicitando no contiene dicha credencial en la DB

Si los parámetros a evaluar son correctas, se enviará un sms con las credenciales 
externas del sitio Web al número de celular registrado por el usuario solicitante
*/

describe("bootsms", (): void => {
    it("Enviar sms con entradas validas", async () => {
        return request(app)
            .post("/api/v1/boot/sms")
            .send({
                id_user: 1,
                id_credencial: 3
            }).expect(200)
    })

    it("Enviar sms con entradas no válidas", async () => {
        return request(app)
            .post("/api/v1/boot/sms")
            .send({
                id_user: '1',
                id_credencial: 8
            })
            .expect(500)
    })

    it("Enviar sms de las credenciales de un Sitio Web cuando el id_user que lo esta solicitando no existe en la DB", async () => {
        return request(app)
            .post("/api/v1/boot/sms")
            .send({
                id_user: 999999999999999,
                id_credencial: 8
            })
            .expect(404)
    })

    it("Enviar sms de las credenciales de un Sitio Web cuando el usuario que lo esta solicitando no contiene dicha credencial en la DB", async () => {
        return request(app)
            .post("/api/v1/boot/sms")
            .send({
                id_user: 1,
                id_credencial: 999999999999999
            })
            .expect(401)
    })
})