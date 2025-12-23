import './AuthInput.module.css';

const AuthInput = ({...props}) => {
    return (
        <div className="container">
            <input {...props} className="Myinput"/>
        </div>
    );
};

export default AuthInput;