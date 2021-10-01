import * as TrailApiUtil from "../util/trail_utils";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

const receiveCurrentTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
});

export const receiveTrail = trailId => dispatch => (
    TrailApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receiveCurrentTrail(trail)))
)