import * as TrailApiUtil from "../util/trail_utils";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";
// export const CLEAR_TRAILS = "RECEIVE_TRAIL";

// console.log("action")
const receiveCurrentTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
});

export const receiveTrail = trailId => dispatch => {
    // debugger
    return TrailApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receiveCurrentTrail(trail)))
}

// export const clearTrails = () => dispatch => {
//     return dispatch(removeTrails());
// }