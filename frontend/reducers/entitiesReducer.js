import { combineReducers } from "redux"
import trailsReducer from "./trailsReducer";
import usersReducer from "./users_reducer"

const entitiesReducer = combineReducers({
    users: usersReducer,
    trails: trailsReducer
})

export default entitiesReducer;