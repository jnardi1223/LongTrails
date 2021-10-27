import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";
import ReactStars from "react-rating-stars-component"

const ReviewItem = ({review}) => {
    
    return (
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
                        
                    </div>
                </div>
            </div>
            <div className="review-text">
                {review.review}
            </div>
            
        </div>
    )
}

export default ReviewItem; 