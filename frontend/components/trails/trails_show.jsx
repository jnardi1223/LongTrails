import React from "react";
import TrailsNavContainer from "./trails_nav_container";

class TrailsShow extends React.Component {
    constructor(props) {
        super(props); 
        
    };

    componentDidMount() {
        this.props.receiveTrail(this.props.match.params.trailId)
    };

    componentDidUpdate(prevProp) {
        if (this.props.match.params.trailId !== prevProp.match.params.trailId) {
            this.props.receiveTrail(this.props.match.params.trailId);
        }
    };


    render() { 
        if (!this.props.trail) {
            return null
        };
        return (
        <div className="trail-page-background">
             
            <div className="trail-header">
                <div className="bread-crumbs">
                    <p>United States</p>   {">"}
                    {this.props.trail.park_id === 20 ? <p>Vermont</p> : <p>Connecticut</p> }   {">"}
                    <p>Park name and link to that park</p>
                </div>
                <TrailsNavContainer /> 
            </div>
                
            <div className="trail-title">
                <h1 className="trail-header">{this.props.trail.trail_name}</h1>
                <div className="title-photo-box">
                 <div className="img">Trail Photo</div>
                {/* <img>Trail Photo</img> */}
            </div>
            </div>
            <div className="trail-info">
                Trail information with description and reviews
            </div>
        </div>
        );
    };
};

export default TrailsShow; 