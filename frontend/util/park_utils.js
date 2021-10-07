export const fetchPark = parkId => {
    // console.log("util")
    return $.ajax({
        url: `/api/parks/${parkId}`,
        method: "GET"
    })
};
export const fetchParks = () => {
    // console.log("util")
    return $.ajax({
        url: '/api/parks',
        method: "GET"
    })
};


export const fetchParkTrails = parkId => (
    $.ajax({
        url: `api/parks/${parkId}/trails`,
        method: "GET"
    })
);
