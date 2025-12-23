import type { FC } from "react";
import AuthInput from "../components/UI/AuthInput/AuthInput";
import { useAuth } from "../store/AuthStore";

const Register: FC = () => {
    const login = useAuth(state => state.login);
    const password = useAuth(state => state.password);

    const setLogin = useAuth(state => state.setLogin);
    const setPassword = useAuth(state => state.setPassword);

    const register = useAuth(state => state.register);

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
            <button onClick={register}>Регистрация</button>
        </div>
    );
};

export default Register;