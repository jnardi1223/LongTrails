import React from "react"; 
import { Link } from "react-router-dom"
// getting its props from the home container right now
const ParkItem = ({park}) => {
    return (
        <Link to={`/park/${park.id}`} className ="trail-item">
            <img src={park.img_url}/>
            <div className="trail-item-content">
                <h2>{park.park_name}</h2>
                <p>{park.state}</p>
                <p>{park.town}</p>
                <p>{park.description}</p>
                <p>{park.higestest_elevation} ft</p>
            </div>
        </Link>
    )
}

export default ParkItem