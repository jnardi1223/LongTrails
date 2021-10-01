import React from 'react'
import { Link } from "react-router-dom";


const SearchContainer = ({currentUser}) => {
    return (
        <div className="search-bar">
            <div className="main-search-bar">
              <form>
                  <input type="text" value="Enter a park or trail name"></input>
                  <button className="search-bar-button">Search</button>
              </form>
            </div>
        </div>
    )
}

export default SearchContainer;