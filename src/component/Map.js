import React,{ useState } from 'react'
import MapGL, {GeolocateControl } from 'react-map-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN='pk.eyJ1IjoiY292aXZpIiwiYSI6ImNrN3ozbzkzNTAwcWozZWxsNmZ4Zm01b2sifQ.Q1j83pq8CZGqDr8jiXSPLw'

const geolocateStyle = {
    float: 'left',
    margin: '50px',
    padding: '10px'
};

const Map = () => {

    const [viewport, setViewPort ] = useState({
        width: "100%",
        height: 900,
        latitude: 0,
        longitude: 0,
        zoom: 2
    })

    const _onViewportChange = viewport => setViewPort({...viewport, transitionDuration: 3000 })

    return (
        <div style={{ margin: '0 auto'}}>
            <h1 style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder' }}>Covid Cases</h1>
            <MapGL
                {...viewport}
                mapboxApiAccessToken={TOKEN}
                mapStyle="mapbox://styles/mapbox/dark-v9"
                onViewportChange={_onViewportChange}
            >
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={{enableHighAccuracy: true}}
                    trackUserLocation={true}
                />
            </MapGL>
        </div>
    )
}

export default Map