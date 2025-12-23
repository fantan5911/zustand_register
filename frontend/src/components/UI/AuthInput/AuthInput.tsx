import type { FC, InputHTMLAttributes } from 'react';
import cl from './AuthInput.module.css';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const AuthInput: FC<AuthInputProps> = ({className, ...props}) => {
    return (
        <div className={cl.container}>
            <input {...props} className={cl.Myinput}/>
        </div>
    );
};

export default AuthInput;