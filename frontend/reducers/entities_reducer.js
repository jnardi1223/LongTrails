import { combineReducers } from "redux"
import parksReducer from "./parks_reducer";
import reviewsReducer from "./reviews_reducer";
import trailsReducer from "./trails_reducer";
import usersReducer from "./users_reducer"

// console.log("entitiesReducer")
const entitiesReducer = combineReducers ({
    users: usersReducer,
    trails: trailsReducer,
    parks: parksReducer,
    reviews: reviewsReducer 
}); 

export default entitiesReducer;