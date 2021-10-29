import { connect } from "react-redux";
import EditReviewForm from './edit_review_form';
import { updateReview, fetchReviews  } from '../../actions/reviews'

const mapStateToProps = (state, ownProps) => {
    return {
        currentUser: state.entities.users[state.session.id],
    }
}


const mapDispatchToProps = (dispatch) => ({
    updateReview: review => dispatch(updateReview(review)),
    fetchReviews: () => dispatch(fetchReviews())
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)