import * as ParkAPIUtil from '../util/park_utils'

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS"
// export const CLEAR_PARK = "CLEAR_PARK"

const receiveCurrentPark = (park) => ({
    type: RECEIVE_PARK,
    park
})

// const removePark = () => ({
//     type: CLEAR_PARK
// })

const receiveCurrentParkTrails = trails => ({
        type: RECEIVE_PARK_TRAILS,
        trails
})

export const receivePark = parkId => dispatch => {
    return ParkAPIUtil.fetchPark(parkId)
    .then((park) => { dispatch(receiveCurrentPark(park))});
}

export const receiveParkTrails = parkId => dispatch => {
    return ParkAPIUtil.fetchParkTrails(parkId)
    .then(trails => dispatch(receiveCurrentParkTrails(trails)));
}

// export const clearPark = () => dispatch => {
//     return dispatch(removePark());
// }