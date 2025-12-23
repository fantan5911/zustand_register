import axios from 'axios';
import {create} from 'zustand';
import type { IUser } from '../types/user.types';

interface Auth extends IUser {
    setLogin: (newLogin: string) => void;
    setPassword: (newPassword: string) => void;

    register: () => Promise<void>;
    loginFn: () => Promise<void>;
}

export const useAuth = create<Auth>((set, get) => ({
    login: '',
    password: '',

    setLogin: (newLogin: string) => set({login: newLogin}),
    setPassword: (newPassword: string) => set({password: newPassword}),

    register: async () => {
        const {login, password} = get();

        await axios.post<IUser>("http://localhost/api/users/register", {
            login: login,
            password: password
        });
    },
    loginFn: async () => {
        const {login, password} = get();

        await axios.post<IUser>("http://localhost/api/users/login", {
            login: login,
            password: password
        });
    }
}));