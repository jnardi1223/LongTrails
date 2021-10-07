import React from "react";
import TrailsNavContainer from "./trails_nav_container";
import Map from "../map/map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";

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

        const {trail} = this.props;
        return (
        <div className="trail-page-background">
             
            <div className="trail-header">
                <div className="bread-crumbs">
                    <p>United States</p>   {">"}
                    {trail.park_id === 6 ? <p>Vermont</p> : <p>Connecticut</p> }   {">"}
                    <p>Park name and link to that park</p>
                </div>
                {/* <TrailsNavContainer />  */}
            </div>
                
            <div className="trail-title">
                <div className="title-photo-box">
                    <img src={trail.img_url_2}/>
                    <div className="title-info-box">
                        <h1 className="trail-title-header">{trail.trail_name}</h1>
                            <div className="difficulty-rating">
                                <div className="difficulty">{trail.difficulty }</div>
                                {/* <div>Review Stars</div> */}
                            </div>
                    </div>
                </div>
                <div className="trail-links">
                    <div className="trail-directions">
                        <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.long}`} >
                            <FontAwesomeIcon icon={faRoute} />
                        </a>
                        <p>Directions</p>
                    </div>
                </div>
            </div>

            <div className="trail-info">
                <div className="left-side">
                    <div className="trail-summary1">
                        <p>{trail.summary}</p>
                    </div>
                    <div className="trail-stats">
                        <div className="trail-stat">
                            <p>Length</p>
                            <span>{trail.length} Miles</span>
                        </div>
                        <div className="trail-stat">
                            <p>Elevation Gain</p>
                            <span>{trail.elevation_gain} ft</span>
                        </div>
                        <div className="trail-stat">
                            <p>Route Type</p>
                            <span>{trail.route_type}</span>
                        </div>
                    </div>
                    <div className="tab">
                        <p>Description</p>
                    </div>
                    <div className="trail-summary1">
                        <p>{trail.summary}</p>
                    </div>
                    <div className="tab">
                        <p>Reviews</p>
                    </div>

                </div>
                <div className="right-side">
                    <div className="map">
                        <Map trail={trail}/>
                    </div>
                    <div className="nearby-trails">Nearby Trails</div>
                </div>
               
            </div>
        </div>
        );
    };
};

export default TrailsShow; 