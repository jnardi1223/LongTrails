import React from "react";
import { Link } from "react-router-dom";


const logo = (
        <div className="nav-logo-title">
             <Link to="/">
                <button>Long Trails</button>
             </Link>
        </div> )

const navSiteLinks = (
    <div className="nav-site-links">

    </div>
)

const Nav = ({ user, signOut }) => {
    if (user) {
        return (
            <div className="main-nav">
                {logo}
                <div>
                    <p>Hello, {user.first_name}</p>
                </div>
                <button className="user-button" onClick={signOut}>Sign Out</button>
            </div>
        )
    } else {
        return (
            <div className="main-nav">
                {navSiteLinks}
                {logo}
                <div className="user-auth">
                    <Link className="sign-up-button" to="/signup">Sign Up</Link>
                    <Link className="sign-out-button" to="/signin">Log In</Link>
                </div>
            </div>
        )
    }
}

export default Nav

