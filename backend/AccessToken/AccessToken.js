import jwt from 'jsonwebtoken';
import {secret_key} from '../config.js';

export const generateAccessToken = (id) => {
    const payload = {
        id
    }
    jwt.sign(payload, secret_key);
}
