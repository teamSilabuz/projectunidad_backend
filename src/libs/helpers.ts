import bcrypt from "bcryptjs";
import ncrypt from "ncrypt-js";
import env from '../config/env';

var ncryptObject = new ncrypt(env.NCRYPT_SECRET_KEY);

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
    return await ncryptObject.encrypt(password);
}

export const decrypt = async (password_encrypt: string) => {
    try {
        return await ncryptObject.decrypt(password_encrypt);
    } catch (error) {

    }
}

