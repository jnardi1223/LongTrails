import { RECEIVE_CURRENT_USER } from "../actions/session";


const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    const newState = Object.assign({}, oldState) 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user
            return newState; 
        default:
            return oldState;
    }


}


export default usersReducer; 