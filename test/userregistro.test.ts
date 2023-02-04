import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("user", (): void => {
    it("Registra nuevos usuarios", async () => {
        return request(app)
            .post("/api/v1/user/registro")
            .send({
                name: "vale2",
                email: "hermez2@bill.com",
                password: "123",
                re_password: "123",
                phone_number: "+51990782288"
            }).expect(201)
    }),

    it("Password repetidos", async () => {
        return request(app)
            .post("/api/v1/user/registro")
            .send({
                name: "vale2",
                email: "hermez@bill.com",
                password: "123",
                re_password: "12",
                phone_number: "+51990782288"
            }).expect(400)
    })
})

