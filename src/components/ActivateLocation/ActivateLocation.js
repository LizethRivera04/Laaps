import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './ActivateLocation.css'


const ActivateLocation = () => {
    return (
        <div className="content-activate-location">
            <div className="container-activate">
                <LocationOnIcon />
                <div className="container-paypal">
                    <p>Para encontrar tu ubicación automáticamente, activa la ubicación de tu dispositivo</p>
                </div>

            </div>
        </div>
    )
}

export default ActivateLocation;