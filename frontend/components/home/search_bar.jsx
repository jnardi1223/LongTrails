import React from 'react'
import { Link } from "react-router-dom";


const SearchContainer = ({currentUser}) => {
    return (
        <div className="search-bar">
            <div className="main-search-bar">
              <form>
                  <input type="text"/>
                  <button className="search-bar-button">Search</button>
              </form>
            </div>
        </div>
    )
}

export default SearchContainer;