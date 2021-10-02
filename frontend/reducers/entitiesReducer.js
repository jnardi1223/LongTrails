import { combineReducers } from "redux"
import parksReducer from "./parksReducer";
import trailsReducer from "./trailsReducer";
import usersReducer from "./users_reducer"


const entitiesReducer = combineReducers({
    users: usersReducer,
    trails: trailsReducer,
    parks: parksReducer
})

export default entitiesReducer;