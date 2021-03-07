import React from "react";
import { useHistory } from "react-router-dom";
import './register-or-login.styles.css'

function RegisterOrLogin() {
    let history = useHistory();

    const routeToRegistration = () => {
        history.push('/registration');
    }
    const routeToLogin = () => {
        history.push('/login');
    }

    return (
        <div className='register-or-login'>
            <button className='login' onClick={routeToLogin}>Login</button>
            <button onClick={routeToRegistration}>Register</button>
        </div>
    );
}

export default RegisterOrLogin;