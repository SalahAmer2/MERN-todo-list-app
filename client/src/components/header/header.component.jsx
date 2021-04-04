import React from "react";
import auth from "../../auth";
import './header.styles.css'

const Header = props => {
    return (
        <header>
            <h1>To-Do List</h1>
            {
                (auth.isAuthenticated()) ?
                    <button className="logoutBtn" onClick={() => {
                        auth.logout(() => {
                            props.history.push("/");
                        })
                    }}>Logout</button>
                    :
                    null
            }

        </header>
    );
}

export default Header;