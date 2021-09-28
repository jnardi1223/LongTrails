import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const _nullSession = {
    id: null
}

const sessionReducer = (oldState = _nullSession, action) => {
    Object.freeze(oldState)
    // const newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {id: action.user.id})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return oldState; 
    }
}

export default sessionReducer; 