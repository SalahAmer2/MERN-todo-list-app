import React from "react";
import { Link } from "react-router-dom";
import './register-or-login.styles.css';
import { EuiFlexGroup, EuiFlexItem, EuiPageTemplate } from "@elastic/eui";

function RegisterOrLogin() {
    return (
        <div className='register-or-login'>
            <EuiFlexGroup gutterSize='none'>
                <EuiFlexItem>
                    <EuiPageTemplate>
                        <Link to="/login"><button className='login btn'>Login</button></Link>
                        <Link to="/registration"><button className='btn'>Register</button></Link>
                    </EuiPageTemplate>
                </EuiFlexItem>
            </EuiFlexGroup>
        </div>
    );
}

export default RegisterOrLogin;