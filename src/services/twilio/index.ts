import Twilio from "twilio";
import env from "../../config/env";
import { ISmsData } from "../../interfaces/smsContext";

const client = Twilio(
    env.TWILIO_ACCOUNT_SID,
    env.TWILIO_AUTH_TOKEN
);

export default async function sendSMS({ user, credencialExt }: ISmsData) {
    const { name: username, phone_number } = user;
    const { name, username_ext, password_ext } = credencialExt;
    try {
        const message = await client.messages.create(
            {
                from: "+13197271109",
                to: String(phone_number),
                body: `Hola ${username} tus credenciales para ${name} es: \n username: ${username_ext} \n password: ${password_ext}`,
            }
        );

        return message;
    } catch (error) {
        console.log(error);
        return error;
    }
}