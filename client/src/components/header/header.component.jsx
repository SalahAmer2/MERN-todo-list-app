import React from "react";
import auth from "../../auth";
import './header.styles.css';
import { matchPath, useLocation, useHistory } from 'react-router';

const Header = props => {


    let history = useHistory();
    const location = useLocation();

    const isUserHomePathActive = !!matchPath(
        location.pathname,
        '/userHome'
    );

    return (
        <header>
            <h1>To-Do List</h1>
            {
                isUserHomePathActive ?
                    <button className="logoutBtn" onClick={() => {
                        auth.logout(() => {
                            history.push("/");
                        })
                    }}>Logout</button>
                    :
                    null
            }

        </header>
    );
}

export default Header;