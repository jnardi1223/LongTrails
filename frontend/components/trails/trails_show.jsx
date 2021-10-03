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
                <div className="title-photo-box">
                    <h1 className="trail-title-header">{this.props.trail.trail_name}</h1>
                    <div className="difficulty">{this.props.trail.difficulty }</div>
                </div>
               
            </div>

            <div className="trail-info">
                <div className="left-side">
                    <div className="trail-summary1">
                        <p>{this.props.trail.summary}</p>
                    </div>
                    <div className="trail-stats">
                        <div className="trail-stat">
                            <p>Length</p>
                            <span>{this.props.trail.length} Miles</span>
                        </div>
                        <div className="trail-stat">
                            <p>Elevation Gain</p>
                            <span>{this.props.trail.elevation_gain} ft</span>
                        </div>
                        <div className="trail-stat">
                            <p>Route Type</p>
                            <span>{this.props.trail.route_type}</span>
                        </div>
                    </div>
                </div>
                <div className="right-side">
                    <div className="map">This will be the map </div>
                </div>
                    
            </div>
        </div>
        );
    };
};

export default TrailsShow; 