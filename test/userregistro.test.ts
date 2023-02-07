import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("user", (): void => {
    it("Registro de usuarios", async () => {
        return request(app)
            .post("/api/v1/user/registro")
            .send({
                name:"valentina",
                email:"bill235@bill.com",
                password:"123",
                re_password:"123",
                phone_number:"+51990782288"
              }).expect(201)
    });

    it("Registro de usuarios - usuario ya existe", async () => {
        return request(app)
            .post("/api/v1/user/registro")
            .send({
                name:"valentina",
                email:"bill235@bill.com",
                password:"123",
                re_password:"123",
                phone_number:"+51990782288"
              }).expect(400)
    });

    it("Registro de usuarios - contraseñas no coinciden", async () => {
        return request(app)
            .post("/api/v1/user/registro")
            .send({
                name:"valentina",
                email:"bill235@bill.com",
                password:"123",
                re_password:"1",
                phone_number:"+51990782288"
              }).expect(400)
    });
});