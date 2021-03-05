import React from "react";
import './footer.styles.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            {/* <p>Copyright ⓒ {year}</p> */}
            <p>Copyright ⓒ 2021</p>
        </footer>
    );
}

export default Footer;