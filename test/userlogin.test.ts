import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("user", (): void => {
    it("Login de usuarios", async () => {
        return request(app)
            .post("/api/v1/user/login")
            .send({
                email:"guti2@bill.com",
                password:"123"
            }).expect(200)
    })
})