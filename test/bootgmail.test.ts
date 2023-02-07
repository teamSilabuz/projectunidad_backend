import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


/*
Validar que el envío gmail de las credenciales del sitio Web de un usuario que lo solicita, 
se efectúe satisfactoriamente, a través de la siguiente solicitud:

    1. Method: POST: "/api/v1/boot/email"

Los parámetros a enviar y que deben ser evaluados son los siguientes:

    - Enviar gmail con entradas validas

    - Enviar gmail con entradas no válidas

    - Enviar gmail de las credenciales de un Sitio Web cuando el id_user que lo esta solicitando no existe en la DB
    
    - Enviar gmail de las credenciales de un Sitio Web cuando el usuario que lo esta solicitando no contiene dicha credencial en la DB

Si los parámetros a evaluar son correctas, se enviará un gmail con las credenciales 
externas del sitio Web al correo electrónico registrado por el usuario solicitante
*/

describe("bootgmail", (): void => {
    it("Enviar gmail con entradas válidas", async () => {
        return request(app)
            .post("/api/v1/boot/email")
            .send({
                id_user: 1,
                id_credencial: 2,
                sandboxMode: true
            })
            .expect(200)
    })

    it("Enviar gmail con entradas no válidas", async () => {
        return request(app)
            .post("/api/v1/boot/email")
            .send({
                id_user: '1',
                id_credencial: 3,
                sandboxMode: true
            })
            .expect(500)
    })

    it("Enviar gmail de las credenciales de un Sitio Web cuando el id_user que lo esta solicitando no existe en la DB", async () => {
        return request(app)
            .post("/api/v1/boot/email")
            .send({
                id_user: 999999999999999,
                id_credencial: 3,
                sandboxMode: true
            })
            .expect(404)
    })

    it("Enviar gmail de las credenciales de un Sitio Web cuando el usuario que lo esta solicitando no contiene dicha credencial en la DB", async () => {
        return request(app)
            .post("/api/v1/boot/email")
            .send({
                id_user: 1,
                id_credencial: 999999999999999,
                sandboxMode: true
            })
            .expect(401)
    })
})