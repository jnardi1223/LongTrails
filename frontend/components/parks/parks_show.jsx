import React from "react";
import TrailsNav from "../trails/trails_nav_container"
import TrailIndex from "../trails/trail_index"
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
            <div>
                < TrailsNav />
                Parks Page 
               
               <div>
                 < TrailIndex park={park} trails={trails}/> 
               </div>
            </div>
        )
    }
}

export default ParksShow