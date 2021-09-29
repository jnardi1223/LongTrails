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


const logo = (
        <div className="logo-title">
             <Link to="/">
                <button>Long Trails</button>
             </Link>
        </div> )


const Nav = ({ user, signOut }) => {
    if (user) {
        return (
            <div className="main-nav">
                {logo}
                <div>
                    <p>Hello, {user.first_name}</p>
                </div>
                <button onClick={signOut}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div className="main-nav">
                {logo}
                <div className="user-auth">
                    <Link className="button" to="/signup">Sign Up</Link>
                    <Link className="button" to="/signin">Sign In</Link>
                </div>
            </div>
        )
    }
}

export default Nav

