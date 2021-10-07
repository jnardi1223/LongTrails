import React from "react";
import ParkItem from "./park_item"

const ParksIndex = ({parks}) => {
    return (
        <div className="park-page">
            <h1>Top Parks</h1>
            <ul>
                {parks.map((park, idx) => {
                    return <ParkItem key={park.id} idx = {idx} park={park}/>
                })}
            </ul>    
        </div>
    )
}

export default ParksIndex; 