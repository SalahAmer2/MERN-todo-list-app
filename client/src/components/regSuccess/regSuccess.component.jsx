import React from "react";
import './regSuccess.styles.css'
import { Link } from "react-router-dom";

function RegSuccess() {

    return (
        <div>
            <h1>Registration Successful!</h1>
            Click <Link to="/">here</Link> to return to Login\Register page.
        </div>
    );
}

export default RegSuccess;