import React from "react";
import TrailsNavContainer from "../trails/trails_nav_container"
import TrailIndex from "../trails/trail_index"
import ParkMap from "../map/map"
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
                    <p>{park.state}</p>   {">"}
                    <p>{park.park_name}</p>
                    {/* <TrailsNavContainer/> */}
                </div>
                <div className="title-photo-box">
                    <img src={park.img_url}/>
                </div>
                <div className="park-description">
                    <h1>{park.park_name}</h1> 
                    <h2>Description</h2>
                    <p>{park.description}</p>
                    {/* <ParkMap lng={park.long} lat={park.lat}/> */}
                </div>
               <div>
                 < TrailIndex park={park} trails={trails}/> 
               </div>
            </div>
        )
    }
}

export default ParksShow