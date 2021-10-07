import React from "react";
import { Link } from "react-router-dom";


const TrailItem = ({trail, park}) => {
    return (
        <Link to={`/trail/${trail.id}`} className="trail-item"> 
            <img src={trail.img_url}/>
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
                <p>{trail.length} Miles</p>
                <p>{trail.summary}</p>
            </div>
        </Link>
        // <div>
        //    {trail.trail_name}
        //    {park.park_name}
        // </div>
    )
}

export default TrailItem