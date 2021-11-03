import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";


const logo = (
        <div className="nav-logo-title">
            <div>
                <Link to="/">
                    <i className="fas faCampground fa-2x">
                    <FontAwesomeIcon icon={faCampground} />
                    </i>
                </Link>
             </div>
             <div className="nav-title">LongTrails</div> 
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
                    <p className="users-name">Hello, {user.first_name}</p>
                    <button className="sign-out-button" onClick={signOut}>Sign Out</button>
                    {/* <p className="users-name">Hello, {user.first_name}</p>
                    <button className="sign-out-button" onClick={signOut}>Sign Out</button> */}
                </div>
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

