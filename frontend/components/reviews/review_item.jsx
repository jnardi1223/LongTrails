import React from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faHiking } from "@fortawesome/free-solid-svg-icons";
import ReactStars from 'react-stars'

const ReviewItem = ({review}) => {
    
    function formatDate(date) {
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        let splitDate = date.split("-");
        return `${monthNames[parseInt(splitDate[1]) - 1]} ${splitDate[2]}, ${splitDate[0]}`;
    }

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
                        <ReactStars value={review.rating}/>
                        <p className="date">{formatDate(review.post_date)}</p>
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