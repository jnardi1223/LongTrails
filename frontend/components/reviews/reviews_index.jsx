import React from "react";
import ReviewItem from "./review_item";


const Reviews = ({trail, reviews}) => {
    const sortedReviews = 
            reviews.slice().filter(review => 
            review.trail_id === trail.id).reverse()
    //only passing the reviews that belong to this hike
    return (
        <div>
            <ul>
                {sortedReviews.map((review, idx) => {
                    // console.log(review.id)
                    return (<div key={review.id} >
                        <ReviewItem review={review} idx={idx}/>
                        {/* passing each filtered review to the reviewItem container */}
                    </div>)
                })}
            </ul>
        </div>
    )

}

export default Reviews;
