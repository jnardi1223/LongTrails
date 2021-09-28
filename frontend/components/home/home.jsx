import React from "react";
import { Link } from "react-router-dom";

const Home = ({ user, signOut }) => {
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

export default Home