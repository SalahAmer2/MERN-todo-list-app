import React from "react";
import { Link } from "react-router-dom";
import './register-or-login.styles.css'

function RegisterOrLogin() {

    return (
        <div className='register-or-login'>
            <Link to="/login"><button className='login'>Login</button></Link>
            <Link to="/registration"><button>Register</button></Link>
        </div>
    );
}

export default RegisterOrLogin;