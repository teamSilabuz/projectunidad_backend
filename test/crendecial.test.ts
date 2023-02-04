import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("credencial", (): void => {
    it("Enviar datos de las credenciales externas", async () => {
        return request(app)
            .post("/api/v1/user/registro")
            .send({
                url: "http://loki.com",
                name: "loki.com",
                username_ext: "loki@gnail.com",
                password_ext: "123",
                id_gestor: 1
            }).expect(500)
    })
})