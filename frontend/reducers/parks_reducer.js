import { RECEIVE_PARK} from "../actions/parks";

// console.log("parksRreducer")
const parksReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    const newState = Object.assign({}, oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_PARK:
            newState[action.park.id] = action.park
            return newState
        default:
            return oldState
    }
}

export default parksReducer;