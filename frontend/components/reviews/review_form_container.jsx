import { connect } from "react-redux";
import ReviewForm from './review_form';
import {createReview} from '../../actions/reviews'

const mapStateToProps = (state, ownProps) => {
    return {
        initialState: {
            rating: 5,
            review: "",
            hike_date: "",
            user_id: state.entities.users[state.session.id].id,
            trail_id: ownProps.trailId

        },
        currentUser: state.entities.users[state.session.id]
    }
} 


const mapDispatchToProps = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)
