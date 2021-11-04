import React from "react";
import SearchContainer from "./../search/search_container"

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

            {/* <form className="sub-search-input" onSubmit={handleSumit}> */}
            <SearchContainer/>
           
        </div>
        )
    }
}

export default TrailsNav; 