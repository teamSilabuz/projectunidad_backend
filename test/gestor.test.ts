import { describe, it } from "vitest";
import request from "supertest";
import app from "../src/app";

describe("test gestor",(): void=>{
    it("Devuelver credenciales por id de usuario", async () => {
        return request(app).get(`/api/v1/gestor/user/2`).expect(200);
    })
    it("Envio de id de usuario no existente", async () => {
        return request(app).get(`/api/v1/gestor/user/20`).expect(400);
    })
    it("ruta incorrecta", async () => {
        return request(app).get(`/api/v1/gestor/user/otro/1`).expect(404);
    })
})
