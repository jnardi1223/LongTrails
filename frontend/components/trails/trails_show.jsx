import React from "react";
import TrailsNavContainer from "./trails_nav_container";
import Map from "../map/trail_map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRoute } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Reviews from "../reviews/reviews_index"
import ReviewForm from "../reviews/review_form_container"

class TrailsShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewForm: false,
            editForm: false,
        } 
        this.showReviewForm = this.showReviewForm.bind(this)
        this.showEditForm = this.showEditForm.bind(this)
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    };

    componentDidMount() {
        this.props.receiveTrail(this.props.match.params.trailId),
        this.props.fetchReviews();
        window.scrollTo(0, 0)
    };

    componentDidUpdate(prevProp) {
        if (this.props.match.params.trailId !== prevProp.match.params.trailId) {
            this.props.receiveTrail(this.props.match.params.trailId);
        }
    };
    // uses bang because it cannot show on initial render, then allows toggle 
    showReviewForm() {
        this.setState({reviewForm: !this.state.reviewForm})
    }

    showEditForm() {
        this.setState({editForm: !this.state.editForm})
    }

    rerenderParentCallback() {
        this.forceUpdate();
    }

    render() { 
       
        if (!this.props.trail) {
            return null
        };
        // if (!this.props.reviews) {
        //     return null
        // };

        const {trail, park, reviews, currentUser, deleteReview, updateReview} = this.props;

        const writeReview = (currentUser ? (
            <div>
            <div className="write-review-button" onClick={this.showReviewForm}>Write review</div>
                {this.state.reviewForm ? (<ReviewForm hideReviewForm={this.showReviewForm} trailId={trail.id} />) : null }
            </div>
         ) : null)
        
        return (
        <div className="trail-page-background">
             
            <div className="trail-header">
                <div className="bread-crumbs">
                    <p>United States</p>   {">"}
                    <p>{park.state}</p>  {">"}
                    <Link to={`/park/${park.id}`}><p>{park.park_name}</p></Link>
                </div>
                <TrailsNavContainer /> 
            </div>
                
            <div className="trail-title">
                <div className="title-photo-box">
                    <img src={trail.img_url_2}/>
                    <div className="title-info-box">
                        <h1 className="trail-title-header">{trail.trail_name}</h1>
                            <div className="difficulty-rating">
                                <div className="difficulty">{trail.difficulty }</div>
                                {/* <div>Review Stars</div> */}
                            </div>
                    </div>
                </div>
                <div className="trail-links">
                    <div className="trail-directions">
                        <a target="_blank" href={`https://www.google.com/maps/dir/Current+Location/${trail.lat},${trail.long}`} >
                            <FontAwesomeIcon icon={faRoute} />
                        </a>
                        <p>Directions</p>
                    </div>
                </div>
            </div>

            <div className="trail-info">
                <div className="left-side">
                    <div className="trail-summary1">
                        <p>{trail.summary}</p>
                    </div>
                    <div className="trail-stats">
                        <div className="trail-stat">
                            <p>Length</p>
                            <span>{trail.length} Miles</span>
                        </div>
                        <div className="trail-stat">
                            <p>Elevation Gain</p>
                            <span>{trail.elevation_gain} ft</span>
                        </div>
                        <div className="trail-stat">
                            <p>Route Type</p>
                            <span>{trail.route_type}</span>
                        </div>
                    </div>
                    <div className="tab">
                        <p>Description</p>
                    </div>
                    <div className="trail-summary1">
                        <p>{trail.summary}</p>
                    </div>
                    <div className="tab">
                        <p>Reviews</p>
                    </div>
                    <div>
                        {/* review form */}
                        {writeReview}
                    </div>
                    <div className="trail-reviews">
                        <Reviews 
                            trail={trail} 
                            reviews={reviews} 
                            currentUser={currentUser} 
                            deleteReview={deleteReview}
                            updateReview={updateReview}
                            showEditForm={this.showEditForm} 
                            editForm={this.state.editForm}
                            rerenderParentCallback={this.rerenderParentCallback}
                        />
                    </div>

                </div>
                <div className="right-side">
                    <div className="map">
                        <Map trail={trail}/>
                    </div>
                    {/* <div className="nearby-trails">Nearby Trails</div> */}
                </div>
               
            </div>
        </div>
        );
    };
};

export default TrailsShow; 