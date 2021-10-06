export const fetchTrail = trailId => {
    // console.log("util")
    return $.ajax({
        url: `/api/trails/${trailId}`,
        method: "GET"
    })
}; 