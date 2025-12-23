import React, { type FC } from "react";
import AuthInput from "../components/UI/AuthInput/AuthInput";
import { useAuth } from "../store/AuthStore";

const Login: FC = () => {

    const login = useAuth(state => state.login);
    const password = useAuth(state => state.password);

    const setLogin = useAuth(state => state.setLogin);
    const setPassword = useAuth(state => state.setPassword);

    const LoginFn = useAuth(state => state.loginFn);

    return (
        <div>
            <AuthInput
             value={login}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
             type="text" 
             placeholder="введите логин"
             />
            <AuthInput
             value={password}
             onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
             type="text"
             placeholder="введите пароль"
            />
            <button onClick={LoginFn}>Вход</button>
        </div>
    );
};

export default Login;