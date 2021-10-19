import React from "react";

class TrailsNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search_bar: ""
        }
    }


  
    
    render() {
        return (
        <div className="trail-page-nav">
            <form className="sub-search-input">
            {/* <form className="sub-search-input" onSubmit={handleSumit}> */}
                <input value="Enter park or trial name"></input>
                <button>Search</button>
            </form>
        </div>
        )
    }
}

export default TrailsNav; 