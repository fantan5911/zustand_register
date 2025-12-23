import type { FC, ReactNode } from "react";

interface AuthButtonProps {
    children?: ReactNode;
}

const AuthButton: FC<AuthButtonProps> = ({children, ...props}) => {
    return (
        <div>
            <button {...props}>{children}</button>
        </div>
    );
};

export default AuthButton;