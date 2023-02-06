import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("user", (): void => {
    it("Login de usuarios", async () => {
        return request(app)
            .post("/api/v1/user/login")
            .send({
                email:"deyvis@bill.com",
                password:"123"
            }).expect(200)
    });

    it("Login de usuarios password incorrecto", async () => {
        return request(app)
            .post("/api/v1/user/login")
            .send({
                email:"deyvis@bill.com",
                password:"12345"
            }).expect(400)
    });

    it("Login de usuarios email incorrecto", async () => {
        return request(app)
            .post("/api/v1/user/login")
            .send({
                email:"yvis@bill.com",
                password:"123"
            }).expect(400)
    });
});