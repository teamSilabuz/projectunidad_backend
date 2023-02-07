import { describe, it, } from "vitest";
import request from "supertest";
import app from "../src/app";


describe("user", (): void => {
    it("Update de credenciales externas", async () => {
        return request(app)
            .put("/api/v1/user/updatepassexterno")
            .send({
                "id_credencial": 9, 
                "passsword":"abc", 
                "re_password":"abc"
            }).expect(200)
    });

    it("Update de credenciales externas (no encontrado)", async () => {
        return request(app)
            .put("/api/v1/user/updatepassexterno")
            .send({
                "id_credencial": 50, 
                "passsword":"abc", 
                "re_password":"abc"
            }).expect(400)
    });
});