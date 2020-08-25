import React, { useState, useRef, useCallback } from 'react';
import credentials from './credentials'
import {
    GoogleMap,
    useLoadScript,
    InfoWindow

} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import Location from './Location'
import Markers from './Markers'
import './Map.css'


const mapContainerStyle = {
    width: '100%',
    height: '200px'
}
const center = {
    lat: 19.426793,
    lng: -99.167640
}
const libraries = ['places']



const Map = () => {
    //state paraa guardar la lat y lng y despues mostrar el marker
    const [marker, setMarker] = useState({});
    const [mark, setMark] = useState(false);
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);



    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: credentials.mapsKey,
        libraries
    })
    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps'

    /*  const addMarker = (e) => {
         //trae info  de lat y long de donce dimos click
         console.log(e);
         setMarkers(current => [...current, {
             lat: e.latLng.lat(),
             lng: e.latLng.lng(),
             time: new Date()
         }])
     } */



    return (
        <div className="container-map">
            <Location
                mapRef={mapRef}
                setMarker={setMarker}
                setMark={setMark}
            />
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                onLoad={onMapLoad}
            /*  onClick={addMarker} */
            >
                <Markers
                    marker={marker}
                    mark={mark}
                />
            </GoogleMap>
        </div>
    )
}

export default Map;