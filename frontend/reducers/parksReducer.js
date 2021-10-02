import { RECEIVE_PARK, RECEIVE_PARK_TRAILS} from "../actions/parks";

const parksReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    const newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_PARK:
            newState[action.park.id] = action.park
            return newState
        case RECEIVE_PARK_TRAILS:
            action.trails
        default:
            return oldState
    }
}

export default parksReducer;