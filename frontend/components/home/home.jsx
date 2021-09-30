import React from 'react'
import { Link } from "react-router-dom";


const Home = ({currentUser}) => {
    return (
        <div className="homepage">
            <div className="homepage-text">
              Find your next adventure
              <SearchContainer />
            </div>
        </div>
    )
}

export default Home;