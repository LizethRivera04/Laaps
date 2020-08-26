import React, { useState } from 'react';
import MyLocationIcon from '@material-ui/icons/MyLocation';


const Location = ({ mapRef, setMarker, setMark }) => {


    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    const geolocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            panTo({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
            setMarker({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                time: new Date()
            })
            setMark(true)
        })
    }

    return (
        <div className="content-geolocation">
            <MyLocationIcon
                className="icon-geolocation"
                color="primary"
                onClick={() => {
                    geolocation()
                }}
            />
            <p className="p-geolocation">Activar ubicación</p>
        </div>



    )
}

export default Location;
