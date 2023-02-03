import sgMail from "@sendgrid/mail";
import env from "../../config/env";
import { IEmailData } from "../../interfaces/smsContext";

sgMail.setApiKey(env.SENDGRID_API_KEY)

const sendEmail = async ({ user, credencialExt }: IEmailData, sandboxMode: boolean) => {
    const { name: username, email } = user;
    const { name, username_ext, password_ext } = credencialExt;

    try {
        const msg = {
            to: email,
            from: 'dnvgavilan@gmail.com',
            subject: `Credenciales de ${name}`,
            text: `Welcome`,
            html: `Hola ${username} tus credenciales para ${name} es: <br/> 
            <strong> username: </strong> ${username_ext} <br/> 
            <strong> password:</strong> ${password_ext}`,
            mail_settings: {
                sandbox_mode: {
                    enable: sandboxMode
                }
            }
        }
        const message = await sgMail.send(msg);

        return message
    } catch (error) {
        console.log(error);
        return error;
    }


}

export default sendEmail;