import React from "react";
import { Link } from "react-router-dom";


const TrailIndexItem = ({trail, park}) => {
    return (
        <Link to={`/trail/${trail.id}`} className="trail-item"> 
            <div className="trail-item-content">
                <h2>{trail.trail_name}</h2>
                <div>{park.park_name}</div>
                <div className="difficulty-rating">
                    <p>
                        <span>
                            {trail.difficulty}
                        </span>
                    </p>
                </div>
                <p>{trail.length}</p>
                <p>{trail.summary}</p>
            </div>
        </Link>
        // <div>
        //    {trail.trail_name}
        //    {park.park_name}
        // </div>
    )
}

export default TrailIndexItem