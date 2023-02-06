import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("user", (): void => {
    it("Update de usuario", async () => {
        return request(app)
            .put("/api/v1/user/updateuser")
            .send({
                "name": "valentina", 
                "email":"hermez@bill.com", 
                "phone_number":"+51990782288"
            }).expect(200)
    });

    it("Update de usuario (no encontrado)", async () => {
        return request(app)
            .put("/api/v1/user/updateuser")
            .send({
                "name": "valentina", 
                "email":"her@bill.com", 
                "phone_number":"+51990782288"
            }).expect(400)
    });
});