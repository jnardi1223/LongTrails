# LongTrails
[LongTrails](https://long-trails-staging.herokuapp.com/#/) is a clone of AllTrails with the name being inspited by a trail I've hiked many times, the Long Trail. Stretching the length Vermont all the way to Canada! 

 ![Splash](app/assets/images/splash.jpeg)

## Technologies


## Functionality and MVP 
- Ruby on Rails
- React/Redux 
- PostgreSQL
- JavaScript/AJAX/JBuilder 
- HTML5/CSS

## Features 

* User Authentification

    Users have the ability to securly sign up on the website.   

    ![User Auth](app/assets/images/sign_up.jpeg)


    ![User Auth](app/assets/images/sign_in.jpeg)

* Reviews/Ratings

    On a trails index page. Users can see all the reviews and a 1-5 rating for each. When a user is signed in they have the option to leave their own review on the page. I was able to do this by down the current user using React/Redux state managment. By using this same logic, I was able to only users to edit or delete their comments only if they were the author. 

    ```
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

    ```
        <div>
            {currUser == review.user_id ? (
            <p><span className="review-button"
            onClick={() => deleteReview(review.id)}>Delete</span>  |  <span className="edit-review-text"
                className="review-button"
                onClick={() => showEditForm()}>Edit</span></p>
            ) : null}
        </div>

* Search Trails

    On the homepage, trail index page, or park index page, users can search for a hike or park in the area. I was able to use the query string to filter out trail or park names that did not match the user input. 

    ```
    def index
    if params[:query]
        split_query = params[:query].split(" ").join("%")
        @trails = Trail.where("trail_name ILIKE ?", "%#{split_query}%")
        @parks = Park.where("park_name ILIKE ?", "%#{split_query}%")
    else
        @trails = Trail.all
        @parks = Park.all
    end

    render :search_results
    end

* Next Feature
    - Incorperating AWS to allow users to upload pictures from their hikes
    - Creating a users profile page


