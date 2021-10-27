import { RECEIVE_TRAIL } from '../actions/trails';
import { UPDATE_REVIEW, RECEIVE_REVIEW, RECEIVE_REVIEWS, REMOVE_REVIEW } from '../actions/reviews'


const reviewsReducer = (state = [], action) => {
    Object.freeze(state);
    let newState = Object.assign([], state);
    switch (action.type) {
        case REMOVE_REVIEW:
            for (let i = 0; i < newState.length; i++) {
                if (newState[i].id === action.reviewId) {
                    return newState.slice(0, i).concat(newState.slice(i+1));
                }
            }
        case RECEIVE_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            newState.push(action.review)
            return newState;
        case UPDATE_REVIEW:
            for(let i = 0; i < newState.length; i++) {
                if (newState[i] && (newState[i].id === action.review.id)) {
                    newState[i] = action.review;
                }
            }
            return newState;
        // case RECEIVE_TRAIL:
        //     return action.trail.reviews
        default:
            return state;
    }
}

export default reviewsReducer