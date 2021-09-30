export const fetchTrail = trailId => (
    $.ajax({
        url: `/api/trails/${trailId}`,
        method: "GET"
    })
); 