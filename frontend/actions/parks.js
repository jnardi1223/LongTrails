import * as ParkAPIUtil from '../util/park_api_util'

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS"
export const CLEAR_PARK = "CLEAR_PARK"

export const receivePark = (park) => ({
    type: RECEIVE_PARK,
    park
})

export const removePark = () => ({
    type: CLEAR_PARK
})

export const receiveParkTrails = trails => ({
        type: RECEIVE_PARK_TRAILS,
        trails
})

export const fetchPark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
    .then((park) => {
        dispatch(receivePark(park))
    });

}

export const fetchParkTrails = parkId => dispatch => {
    return ParkAPIUtil.fetchParkTrails(parkId)
    .then(trails => dispatch(receiveParkTrails(trails)));
}

export const clearPark = () => dispatch => {
    return dispatch(removePark());
}