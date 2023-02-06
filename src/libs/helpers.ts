import bcrypt from "bcryptjs";
import { endecrypt } from "./endecrypt";
import env from '../config/env';

const endecryptObj = new endecrypt(env.ENDECRYPT_SECRET_KEY);

export const encryptPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

export const comparePassword = async (password: string, userpassword: string) => {
    try {
        return await bcrypt.compare(password, userpassword);
    } catch (error) {
        console.error(error);
    }
}

export const encrypt = async (password: string) => {
    return await endecryptObj.encrypt(password);
}

export const decrypt = async (password_encrypt: string) => {
    return await endecryptObj.decrypt(password_encrypt);
}