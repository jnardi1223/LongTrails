import {connect} from "react-redux"
import ParksShow from  "./parks_show"
import {receivePark} from "../../actions/parks";
import { receiveParkTrails } from "../../actions/parks";
// debugger 
// console.log("parksContainer")
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    return ({
        // parks: state.entities.parks,
        park: state.entities.parks[ownProps.match.params.parkId], 
        trails: Object.values(state.entities.trails)  
    })
}; 

const mapDispatchToProps = dispatch => {
    return ({
        receivePark: parkId => dispatch(receivePark(parkId)),
        receiveParkTrails: parkId => dispatch(receiveParkTrails(parkId))
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(ParksShow); 