import React from "react";
import './footer.styles.css';
import { matchPath, useLocation, useHistory, useRouteMatch } from 'react-router';

function Footer(props) {
    const year = new Date().getFullYear();

    // const fetchLocation = value => {
    //     return window.location.href.indexOf(value) > -1;
    // };

    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch("write-the-url-you-want-to-match-here");

    const isUserHomePathActive = !!matchPath(
        location.pathname,
        '/userHome'
    );
    return (
        <div
            className='footer'
            style={
                isUserHomePathActive ?
                    {
                        textAlign: 'center',
                        bottom: 0,
                        width: '100%',
                        height: '2.5rem'
                    }
                    :
                    {
                        position: 'absolute',
                        textAlign: 'center',
                        bottom: 0,
                        width: '100%',
                        height: '2.5rem'
                    }
            }
        >
            {/* <footer> */}
            {/* <p>Copyright ⓒ {year}</p> */}
            {/* {
                fetchLocation("userHome") ? <br /> : null
            }
            {
                fetchLocation("userHome") ? <br /> : null
            } */}
            {
                isUserHomePathActive ? <br /> : null
            }
            {
                isUserHomePathActive ? <br /> : null
            }
            {
                isUserHomePathActive ? <br /> : null
            }
            {
                isUserHomePathActive ? <br /> : null
            }
            <p>Copyright ⓒ 2021</p>
            {
                isUserHomePathActive ? <br /> : null
            }
            {/* {
                fetchLocation("userHome") ? <br /> : null
            } */}
            {/* </footer> */}
        </div>
    );
}

export default Footer;