// import React from 'react';
// import HomeContainer from "../home/home_container";
// import { Link } from 'react-router-dom';

// const NavBar=()=>(
//     <div className="header">
//         <HomeContainer/>
//     </div>
// )

// export default NavBar

import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ user, signOut }) => {
    if (user) {
        return (
            <div className="Home">
                <div>
                    <p className="username">Hello, {user.first_name}</p>
                </div>
                <button onClick={signOut}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Long Trails</h1>
                <Link className="button" to="/signup">Sign Up</Link>
                <Link className="button" to="/signin">Sign In</Link>
            </div>
        )
    }
}

export default Nav