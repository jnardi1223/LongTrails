import {connect} from "react-redux"
import TrailsNav from "./trails_nav"
import { receiveTrail } from "../../actions/trails";

const mapStateToProps = (state, ownProps) => {
    // console.log
    return ({
        
    })
}; 


const mapDispatchToProps = dispatch => {
    return ({
    receiveTrail: trailId => dispatch(receiveTrail(trailId)) 
    })
}; 



export default connect(mapStateToProps, mapDispatchToProps)(TrailsNav); 