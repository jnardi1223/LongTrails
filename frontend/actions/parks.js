import * as ParkApiUtil from '../util/park_utils'

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS";
// console.log(RECEIVE_PARK)
const receiveCurrentPark = (park) => {
    return ({type: RECEIVE_PARK,
    park
})}


const receiveCurrentParkTrails = trails => ({
        type: RECEIVE_PARK_TRAILS,
        trails
})

export const receivePark = parkId => dispatch => {
    // debugger e
    return ParkApiUtil.fetchPark(parkId)
    .then((park) => { dispatch(receiveCurrentPark(park))});
}

export const receiveParkTrails = parkId => dispatch => {
    return ParkApiUtil.fetchParkTrails(parkId)
    .then(trails => dispatch(receiveCurrentParkTrails(trails)));}
