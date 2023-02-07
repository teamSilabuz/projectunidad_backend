import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("credencial", (): void => {
    it("Enviar datos de las credenciales externas", async () => {
        return request(app)
            .post("/api/v1/credencial/externo")
            .send({
                url: "http://lotes.com",
                name: "lotes.com",
                username_ext: "lotes@gnail.com",
                password_ext: "123",
                id_gestor: 1
            }).expect(201)
    })
})

it("recibe los datos incorrectos", async () => {
    return request(app)
        .post("/api/v1/credencial/externo")
        .send({
            url: "http://lotes.com",
            name: 1,
            username_ext: "lotes@gmail.com",
            password_ext: "123",
            id_gestor: 1
        }).expect(500)
})

