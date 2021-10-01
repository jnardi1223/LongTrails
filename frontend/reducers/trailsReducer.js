import {RECEIVE_TRAIL} from "../actions/trails"

const trailsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_TRAIL:
            newState[action.trail.id] = action.trail
            return newState
        default:
            return oldState
    }
}

export default trailsReducer;