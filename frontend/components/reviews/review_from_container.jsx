import { connect } from "react-redux";
import ReviewForm from './review_form';
import {createReview} from '../../actions/reviews'

const mapStateToProps = (state, ownProps) => {
    return {
        initialState: {
            rating: 5,
            review_text: "",
            activity_date: "",
            user_id: state.entities.users[state.session.currentUserId].id,
            trail_id: ownProps.TrailId

        },
        currentUser: state.entities.users[state.session.currentUserId],
    }
} 


const mapDispatchToProps = (dispatch) => ({
    createReview: review => dispatch(createReview(review)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)