import * as ParkApiUtil from '../util/park_utils'

export const RECEIVE_PARK = "RECEIVE_PARK"
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS";
export const RECEIVE_ALL_PARKS = "RECEIVE_ALL_PARKS";
// console.log(RECEIVE_PARK)
const receiveCurrentPark = (park) => {
    return ({type: RECEIVE_PARK,
    park
})}


const receiveCurrentParkTrails = trails => ({
        type: RECEIVE_PARK_TRAILS,
        trails
})

const receiveAllCurrentParks = parks => ({
    type: RECEIVE_ALL_PARKS,
    parks 
})

export const receivePark = parkId => dispatch => {
    // debugger e
    return ParkApiUtil.fetchPark(parkId)
    .then((park) => { dispatch(receiveCurrentPark(park))});
}

export const receiveParkTrails = parkId => dispatch => {
    return ParkApiUtil.fetchParkTrails(parkId)
    .then(trails => dispatch(receiveCurrentParkTrails(trails)));
}

export const receiveAllParks = () => dispatch => {
    return ParkApiUtil.fetchParks()
    .then(parks => dispatch(receiveAllCurrentParks(parks))); 
}