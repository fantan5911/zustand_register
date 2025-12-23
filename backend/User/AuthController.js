import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {generateAccessToken} from '../AccessToken/AccessToken.js';


class AuthController {
    async Register(req, res) {
        try {
            const {login, password} = req.body;

            const searchedUser = await User.findOne({login});

            if (searchedUser) {
                return res.status(400).json({message: "Пользователь уже зарегистрирован"});
            }
            const hashPassword = await bcrypt.hashSync(password, 7);

            const user = new User({login, password: hashPassword});
            await user.save();
        }
        catch (e) {
            console.log(e);
        } 
    }
    async Login(req, res) {
        try {
            const {login, password} = req.body;

            const user = await User.findOne({login});

            if (!user) {
                return res.status(400).json({message: "Неправильный логин или пароль"});
            }
            const validPassword = await bcrypt.compareSync(password, user.password);
            if (!validPassword) {
                return res.status(400).json({message: "Неправильный логин или пароль"});
            }
            const token = generateAccessToken(user._id);
        }
        catch (e) {
            console.log(e);
        }
    }
}

export default new AuthController();