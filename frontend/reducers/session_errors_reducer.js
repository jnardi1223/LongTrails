import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, RESET_SESSION_ERRORS } from '../actions/session'


const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ERRORS:
            // console.log(action); 
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return [];
        case RESET_SESSION_ERRORS:
            return [];
        default:
            return state;
    }
}

export default sessionErrorsReducer