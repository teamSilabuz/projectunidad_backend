import bcrypt from "bcryptjs";

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