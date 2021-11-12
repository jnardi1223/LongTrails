import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground, faHiking } from "@fortawesome/free-solid-svg-icons";


const logo = (
        <div className="nav-logo-title">
                <Link className="nav-link" to="/">
            <div>
                    <i className="fas faCampground fa-2x">
                    <FontAwesomeIcon icon={faCampground} />
                    </i>
             </div>
             <div className="nav-title">LongTrails</div> 
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
                {navSiteLinks}
                {logo}
                <div>
                    <p className="users-name">Hello, {user.first_name}</p>
                    <button className="sign-out-button" onClick={signOut}>Sign Out</button>
                    {/* <p className="users-name">Hello, {user.first_name}</p>
                    <button className="sign-out-button" onClick={signOut}>Sign Out</button> */}
                </div>
            </div>
            // <>
            // <div className="main-nav">
            // {navSiteLinks}
            // {logo}
            // <div className="dropdown-select">
            //     <div className="profile-pic">
            //         <FontAwesomeIcon icon={faHiking} />
            //     </div>  
            //     <p>{user.firstname}</p>
            //  </div>
            // </div>
            // <ul className="user-dropdown">
            //     <li>
            //         <button onClick={signOut}>Logout</button>
            //     </li>
            // </ul>
        // </>
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

