import * as TrailApiUtil from "../util/trail_utils";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

const receieveCurrentTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
});

export const receieveTrail = trailId => dispatch => (
    TrailApiUtil.fetchTrail(trailId)
        .then(trail => dispatch(receieveCurrentTrail(trail)))
)