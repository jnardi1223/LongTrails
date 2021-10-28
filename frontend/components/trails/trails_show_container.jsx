import {connect} from "react-redux"
import TrailsShow from "./trails_show"
import { receiveTrail } from "../../actions/trails";
import { fetchReviews } from "../../actions/reviews";

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    // console.log(ownProps)
    // console.log(state.entities.reviews)
    if (!state.entities.trails[ownProps.match.params.trailId]) {
        return {}; 
    }
    return ({
        trail: state.entities.trails[ownProps.match.params.trailId],
        park: state.entities.trails[ownProps.match.params.trailId].park,
        reviews: state.entities.reviews,
        currentUser: state.entities.users[state.session.id]
    })
}; 

const mapDispatchToProps = dispatch => {
    return ({
    receiveTrail: trailId => dispatch(receiveTrail(trailId)),
    fetchReviews: () => dispatch(fetchReviews()) 
    })
}; 


export default connect(mapStateToProps, mapDispatchToProps)(TrailsShow); 

