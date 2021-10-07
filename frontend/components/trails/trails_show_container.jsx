import {connect} from "react-redux"
import TrailsShow from "./trails_show"
import { receiveTrail } from "../../actions/trails";

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    // console.log(state.entities.trails.trailId)
    if (!state.entities.trails[ownProps.match.params.trailId]) {
        return {}; 
    }
    console.log(state.entities.trails[ownProps.match.params.trailId].park)
    return ({
        trail: state.entities.trails[ownProps.match.params.trailId],
        park: state.entities.trails[ownProps.match.params.trailId].park
    })
}; 

const mapDispatchToProps = dispatch => {
    return ({
    receiveTrail: trailId => dispatch(receiveTrail(trailId)) 
    })
}; 


export default connect(mapStateToProps, mapDispatchToProps)(TrailsShow); 

