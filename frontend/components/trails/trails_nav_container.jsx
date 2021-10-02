import {connect} from "react-redux"
import TrailsNav from "./trails_nav"
import { receiveTrail } from "../../actions/trails";

// const mapStateToProps = (state, ownProps) => {
//     return ({
//         trail: state.entities.trails[ownProps.match.params.trailId]
//     })
// }; 
// console.log(state); 

const mapDispatchToProps = dispatch => {
    return ({
    receiveTrail: trailId => dispatch(receiveTrail(trailId)) 
    })
}; 



export default connect(null, mapDispatchToProps)(TrailsNav); 