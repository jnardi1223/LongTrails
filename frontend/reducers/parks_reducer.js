import { RECEIVE_PARK, RECEIVE_ALL_PARKS} from "../actions/parks";

// console.log("parksRreducer")
const parksReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    const newState = Object.assign({}, oldState)
    // debugger
    switch (action.type) {
        case RECEIVE_PARK:
            newState[action.park.id] = action.park
            return newState
        case RECEIVE_ALL_PARKS:
            action.parks.forEach(park => (
                newState[park.id] = park
            ))
            return newState; 
        default:
            return oldState;
    }
}

export default parksReducer;