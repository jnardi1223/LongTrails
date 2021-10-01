export const fetchPark = parkId => (
    $.ajax({
        url: `/api/parks/${parkId}`,
        method: "GET"
    })
);


export const fetchParkTrails = parkId => (
    $.ajax({
        url: `api/parks/${parkId}/trails`,
        method: "GET"
    })
);