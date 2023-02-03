import jwt from 'jsonwebtoken';
import env from '../config/env';


export const sign = (user: object) =>{
    return jwt.sign(
        user, 
        env.JWT_SECRET,
        { expiresIn: env.JWT_EXPIRES_IN }
        );
}

