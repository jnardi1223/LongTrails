import {connect} from "react-redux"
import ParksShow from  "./parks_show"
import {receivePark, receiveParkTrails} from "../../actions/parks"

const mapStateToProps = (state, ownProps) => {
    return {
        // parks: state.entities.parks,
        
        park: state.entities.parks[ownProps.match.params.parkId], 
        trails: Object.values(state.entities.trails)  
    }
}; 

const mapDispatchToProps = dispatch => {
    return ({
        receivePark: park => dispatch(receivePark(park)),
        receiveParkTrails: parkId => dispatch(receiveParkTrails(parkId))
    })
};


export default connect(mapStateToProps, mapDispatchToProps)(ParksShow); 