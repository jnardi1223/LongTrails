import {RECEIVE_TRAIL, CLEAR_HIKES} from "../actions/trails"
import { RECEIVE_PARK_TRAILS } from "../actions/parks";

// console.log("trailsReducer")
const trailsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_TRAIL:
            newState[action.trail.id] = action.trail
            return newState
        case RECEIVE_PARK_TRAILS:
            action.trails.forEach(trail => (
                newState[trail.id] = trail
            ))
            return newState
        case CLEAR_HIKES:
            return {}; 
        default:
            return oldState
    }
}

export default trailsReducer;