import React from "react";
import ParkItem from "../parks/park_item"
// getting its props fromt he home container for now
const ParksIndex = ({parks}) => {
    return (
        <div className="park-page">
            <h1>Top Parks</h1>
            <ul className="park-list">
                {parks.map((park, idx) => {
                    return <ParkItem key={park.id} idx={idx} park={park}/>
                })}
            </ul>    
        </div>
    )
}

export default ParksIndex; 