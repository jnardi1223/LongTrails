import {RECEIVE_TRAIL} from "../actions/trails"

const trailsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_TRAIL:
            return newState[action.trail.id] = action.trail
        default:
            return oldState
    }
}

export default trailsReducer;