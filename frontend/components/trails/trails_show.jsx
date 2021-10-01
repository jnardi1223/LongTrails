import React from "react";
import TrailsNavContainer from "./trails_nav_container";

class TrailsShow extends React.Component {
    constructor(props) {
        super(props); 
        
    }

    componentDidMount() {
        this.props.receiveTrail(this.props.match.params.trailId)
    }

    componentDidUpdate(prevProp) {
        if (this.props.match.params.trailId !== prevProp.match.params.trailId) {
            this.props.receiveTrail(this.props.match.params.trailId);
        }
    }


    render() {
        if (!this.props.trail) {
            return null
        }
        return (
        <div className="trail-page-background">
            <TrailsNavContainer /> 
            <div className="trail-header">
                
            </div>
            <div className="trail-info">
                Trail information with description and reviews
            </div>
        </div>
        )
    }
}

export default TrailsShow; 