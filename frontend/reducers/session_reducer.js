import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session";

const _nullSession = {
    id: null
}

export default (oldState = _nullSession, action) => {
    Object.freeze(oldState)
    // const newState = Object.assign({}, oldState)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user.id})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        default:
            return oldState; 
    }
}