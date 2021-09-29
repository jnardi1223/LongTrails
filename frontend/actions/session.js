import {createUser, createSession, deleteSession} from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RESET_SESSION_ERRORS = 'RESET_SESSION_ERRORS'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user 
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
});

const resetSessionErrors = () => ({
    type: RESET_SESSION_ERRORS
});


export const reset = () => dispatch => (
    dispatch(resetSessionErrors())
)


export const signUp = user => dispatch => (
    createUser(user) 
        .then(user => dispatch(receiveCurrentUser(user)),
              (err => dispatch(receiveErrors(err.responseJSON))
        ))
    
);

export const signIn = user => dispatch => (
    createSession(user)
        .then(
            (user) => dispatch(receiveCurrentUser(user)),
             (err) => dispatch(receiveErrors(err.responseJSON))
        )
);

export const signOut = () => dispatch => (
    deleteSession()
        .then(() => dispatch(logoutCurrentUser())),
             (err => dispatch(receiveErrors(err.responseJSON))
        )
);

