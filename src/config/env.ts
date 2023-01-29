import env from 'dotenv';

env.config();

export default {
    DATABASE_URL: process.env.DATABASE_URL as string,
    PORT: process.env.PORT as string,
}