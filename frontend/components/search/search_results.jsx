import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree, faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


class SearchResults extends React.Component {



    render () {

        const parent = this.props.parent === "sub" ? "sub-" : "";

        const noResults = <li className={`${parent}search-result-item`}>No Results Found</li>

        const yesResults = this.props.results.map((result, idx) => (
                <li className={`${parent}search-result-item`} key={idx}>
                    {result.category === "Trail" ? (
                    <Link to={`/trail/${result.id}`} >
                        <div className="result-trail-icon"><FontAwesomeIcon icon={faMapSigns} /></div>
                            {result.trail_name}
                        </Link>
                    ) : (
                        <Link to={`/park/${result.id}`}>
                            <div className="result-park-icon"> <FontAwesomeIcon icon={faTree} /></div>
                            {result.park_name}
                        </Link>
                    )}
                </li>
            ))
        

        return (
            <ul className={`${parent}search-results`}>
                {(this.props.results.length) ? yesResults : noResults}
            </ul>
        )
    }
}

export default SearchResults