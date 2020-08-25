import React, { Fragment } from 'react';
import { Marker } from '@react-google-maps/api';
import credentials from './credentials'
import Geocode from 'react-geocode'





const Markers = ({ marker, mark }) => {
    //console.log(mark);
    if (!mark) return null
    Geocode.setApiKey(credentials.mapsKey)
    Geocode.fromLatLng(marker.lat, marker.lng)
        .then(res => {
            console.log(res.results[0].formatted_address);
        })

    return (
        <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
        />
    )
}

export default Markers;