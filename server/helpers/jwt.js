import jwt from 'jsonwebtoken';

const SECRET_KEY = 'assumpta';

export const tokenGenerator = (payload) =>{
    return jwt.sign(payload,SECRET_KEY );
}