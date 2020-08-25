import React, { useState } from 'react';




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
        <button
            onClick={() => {
                geolocation()

            }}
        >
            Location
        </button>

    )
}

export default Location;
