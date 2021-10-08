import React from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoiam5hcmRpMTIyMyIsImEiOiJja3VkZXBpMDAxOXJuMzFuemd4cTBpMWp5In0.bMT8Kin9KmXa6tjW1wvdKQ'

class ParkMap extends React.Component {
    constructor(props) {
        super(props)
        // if ()
            this.state = {
                lng: this.props.park.long,
                lat: this.props.park.lat,
                zoom: 13
            }
        this.mapContainer = React.createRef();
    }


componentDidMount() {
    const map = new mapboxgl.Map({
        container: this.mapContainer, 
        style: 'mapbox://styles/mapbox/streets-v11', 
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom
    })
}
        
       
render () {
    return (
        <div>
            <div ref={el => this.mapContainer = el} style={{width:'70%', height:'30vh'}}/>
         </div>
        )
    }
}

export default ParkMap