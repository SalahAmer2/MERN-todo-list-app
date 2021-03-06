import React from "react";
import './register-or-login.styles.css'

function RegisterOrLogin() {
    return (
        <div className='register-or-login'>
            <button className='login'>Login</button>
            <button>Register</button>
        </div>
    );
}

export default RegisterOrLogin;