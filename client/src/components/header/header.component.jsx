import React from "react";
import auth from "../../auth";
import './header.styles.css';
import { matchPath, useLocation, useHistory } from 'react-router';
import { EuiFlexGroup, EuiFlexItem, EuiPageTemplate } from "@elastic/eui";

const Header = props => {

    let history = useHistory();
    const location = useLocation();

    const isUserHomePathActive = !!matchPath(
        location.pathname,
        '/userHome'
    );

    return (
        <div>
            {
                isUserHomePathActive ?
                    <EuiFlexGroup gutterSize='none'>
                        <EuiFlexItem>
                            <EuiPageTemplate>
                                <header>
                                    <h1 id='header'>To Do List</h1>
                                    <button className="logoutBtn" onClick={() => {
                                        auth.logout(() => {
                                            history.push("/");
                                        })
                                    }}>Logout</button>
                                </header>
                            </EuiPageTemplate>
                        </EuiFlexItem>
                    </EuiFlexGroup>
                    :
                    <header>
                        <h1 id='header'>To Do List</h1>
                    </header>
            }
        </div>
    );
}

export default Header;


// import React from "react";
// import { useRef } from 'react';
// import auth from "../../auth";
// import './header.styles.css';
// import { matchPath, useLocation, useHistory } from 'react-router';
// // const HeaderName = require('./headerMQL');


// const Header = props => {

//     let headerRef = useRef();
//     // headerRef = ''

//     let history = useHistory();
//     const location = useLocation();

//     const isUserHomePathActive = !!matchPath(
//         location.pathname,
//         '/userHome'
//     );

//     const Component1 = `
//     <h1>To-Do List</h1>
//     </br></br></br></br></br></br>
//     `;

//     const Component2 = `
//     <h1>To-Do List</h1>
//     `;

//     // const headerRef = useRef(Component1);

//     const setHeaderInnerHTML = (html) => {
//         // refs.headerRef.innerHTML = html;
//         // headerRef.current.innerHTML = html
//         // headerRef.current.children = html;
//         headerRef = html;

//         // ReactDOM.findDOMNode('header').innerHTML;

//         // const header = document.getElementById('header');
//         // header.innerHTML = html;
//     };

//     // I'm borrowing the MDN doc notation here: "mql" stands for "media query list".
//     const mql = window.matchMedia('(max-width: 600px)');

//     // For first render
//     let mobileView = mql.matches;
//     if (mobileView) {
//         setHeaderInnerHTML(Component1);
//     } else {
//         setHeaderInnerHTML(Component2);
//     }

//     // For subsequent renders if screen size changes
//     mql.addEventListener('change', (e) => {
//         let mobileView = e.matches;
//         if (mobileView) {
//             setHeaderInnerHTML(Component1);
//         } else {
//             setHeaderInnerHTML(Component2);
//         }
//     });

//     return (
//         <header>
//             <div ref={headerRef} id='header'></div>
//             {/* <h1>To-Do List</h1> */}
//             {
//                 isUserHomePathActive ?
//                     <button className="logoutBtn" onClick={() => {
//                         auth.logout(() => {
//                             history.push("/");
//                         })
//                     }}>Logout</button>
//                     :
//                     null
//             }

//         </header>
//     );
// }

// export default Header;