import * as env from 'dotenv';

env.config();

export default {
    DATABASE_URL: process.env.DATABASE_URL as string,
    PORT: process.env.PORT as string,
    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID as string,
    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN as string,
    JWT_SECRET: process.env.JWT_SECRET as string,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN as string,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY as string,
    ENDECRYPT_SECRET_KEY: process.env.ENDECRYPT_SECRET_KEY as string
}