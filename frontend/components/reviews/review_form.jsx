import React from 'react'
import ReactStars from "react-rating-stars-component"

class ReviewForm extends React.Component {
    constructor(props){
        super(props)
        //Make the starting state what is passed in from the container
        this.state = this.props.initialState; 

        this.handleSubmit = this.handleSubmit.bind(this)
    }
    //once form is submitted it will fire this function with the current state, then set state back to initial state
    handleSubmit(e) {
        e.preventDefault();
        this.props.createReview(this.state);
        // this.props.hideReviewForm();
        this.setState(this.props.initialState)
    }
    //each time a field is typed in or changed it will change what is rendering
    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    render() {
        //size of stars to 30, start with all them filled in, only full starts, on change set the state of rating to what the user picked 
        const starOps = {
            size: 30,
            value: 5,
            isHalf: false,
            onChange: (newValue) => {
                this.setState({ rating: newValue });
            },
        }; 
        // console.log(this.props.currentUser)
        return (
            <div> 
                <form onSubmit={this.handleSubmit} className="review-form">
                    <p>Rating</p>
                    <div className="rating-select">
                        <ReactStars {...starOps} />
                    </div>
                    <div>
                        <p>Date</p>
                        <input
                            type="date"
                            className="text-input"
                            placeholder="Hike Date"
                            value={this.state.hike_date}
                            onChange={this.update("hike_date")}
                            required 
                        />
                        <p>Review</p>
                        <textarea
                            className="text-input review-text"
                            placeholder="Share your thoughts about the trail so others know what to expect"
                            value={this.state.review}
                            onChange={this.update("review")}
                            required
                        />
                    </div>
                    <button className="write-review-button">Submit Review</button>
                </form>
                
            </div>
        )}
}

export default ReviewForm; 