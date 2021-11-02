import React from "react";
// import ReviewItem from "./review_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component"
import EditReviewForm from './edit_review_form'

function formatDate(date) {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    let splitDate = date.split("-");
    return `${monthNames[parseInt(splitDate[1]) - 1]} ${splitDate[2]}, ${splitDate[0]}`;
}

// need to also bring in editForm, deleteReview, currnetUser, hideEditForm, rerenderParentCallback
    const Reviews = ({trail, reviews, currentUser, deleteReview, rerenderParentCallback, showEditForm, updateReview, editForm, hideEditForm}) => {
    const sortedReviews = 
            reviews.slice().filter(review => 
            review.trail_id === trail.id).reverse()

    // if there is no user we need to make the id -1 so that is does no error out
    const currUser = currentUser ? currentUser.id : -1

    return (
        <div>
            <ul>
            {sortedReviews.map((review) => {
            return ((review.user_id == currUser) && editForm) ? 
                (
                    <EditReviewForm
                        rerenderParentCallback={rerenderParentCallback} 
                        key={review.id} 
                        initialState={review} 
                        hideEditForm={showEditForm}
                        currentUser={currentUser} 
                        updateReview={updateReview}
                        />
                ) :
                (<div key={review.id}>
                    <div className="review-item">
                        <div className="review-pic-name">
                            <div className="profile-pic">
                            <FontAwesomeIcon icon={faHiking}/>
                            </div>
                            <div className="review-header">
                                <p className="reviwer-name">
                                    {review.reviewer.first_name} {review.reviewer.last_name}
                                </p>
                                <div className="star-date">
                                    <ReactStars value={review.rating}/>
                                    <p className="date">{formatDate(review.hike_date)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="review-text">
                        {review.review}
                        </div>
                        <div>
                            {currUser == review.user_id ? (
                            <p><span className="delete-review-text"
                            onClick={() => deleteReview(review.id)}>Delete</span>  |
                            <span className="edit-review-text"
                                onClick={() => showEditForm()}>Edit</span></p>
                            ) : null}
                        </div>
                    </div>
                </div>)
                })}
            </ul>
        </div>
    )

}

export default Reviews;
