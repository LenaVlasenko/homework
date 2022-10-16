import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '300px',
    height: '300px'
};


let center = {
    lat: 46.965398514462000,
    lng: 31.987413167953000
};

const zoom = 5

function MapNovaPoshta(props) {
    console.log("Отделение: ")
    // props.warehouses.map(wh =>{
    //     console.log(wh.Latitude + " " + wh.Longitude)
    // })
    if (props.warehouses[0]){
        center = {
            lat: parseFloat(props.warehouses[0].Latitude),
            lng: parseFloat(props.warehouses[0].Longitude)

        }
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            // defayltZoom={zoom}
            // zoom={zoom}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {/*<Marker*/}
            {/*    position={center}*/}
            {/*/>*/}

            {
                props.warehouses.map(wh => {
                    console.log(wh.Latitude + " " + wh.Longitude)
                    let pos = {lat: parseFloat(wh.Latitude), lng: parseFloat(wh.Longitude)}
                    return(
                        <Marker
                            icon={"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"}
                            key={wh.Ref} position={pos} />
                    )

            })}
        </GoogleMap>
    ) : <></>
}

export default React.memo(MapNovaPoshta)