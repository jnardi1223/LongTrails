import React from "react";
import TrailsNavContainer from "../trails/trails_nav_container"
import TrailIndex from "../trails/trail_index"
import ParkMap from "../map/park_map"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

// import parks_show_container from "./parks_show_container";
// console.log("parksShow")
class ParksShow extends React.Component {
    constructor(props) {
        super(props); 
    }
    

    componentDidMount() {
        this.props.receivePark(this.props.match.params.parkId);
        this.props.receiveParkTrails(this.props.match.params.parkId)
    };
    

    render() {
        if (!this.props.park) {
            return null
        };
        if (!this.props.trails) {
            return null
        };
        const {park, trails} = this.props
        // console.log(this.props.park)
        return (
            <div className="park-page">
                <div className="bread-crumbs">
                    <p>United States</p>   {">"}
                    <p>{park.state}</p>   
                    <TrailsNavContainer/>
                </div>
                <div className="title-photo-box">
                    <img src={park.img_url}/>
                </div>
                <div className="park-description">
                    <div className="trail-summary1">
                        <h1>{park.park_name}</h1> 
                        <h2>Description</h2>
                        <p>{park.description}</p>
                    </div>
                    <div className="trail-stats">
                        <div className="trail-stat">
                            <p>State</p>
                            <span>{park.state}</span>
                        </div>
                        <div className="trail-stat">
                            <p>Town</p>
                            <span>{park.town}</span>
                        </div>
                        <div className="trail-stat">
                            <p>Highest Elevation</p>
                            <span>{park.higest_elevation} ft</span>
                        </div>
                    </div>
                
                    <div className="tab">Map</div>
                </div>
               <div>
               </div>
               <ParkMap className="park-map" park={park}/>
               <div className="park-actions">
                    <div className="park-action">
                        <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${park.lat},${park.long}`} >
                            <FontAwesomeIcon icon={faRoute} />
                        </a>
                        <p>Directions</p>
                    </div>
                </div>
                < TrailIndex park={park} trails={trails}/> 
            </div>
        )
    }
}

export default ParksShow