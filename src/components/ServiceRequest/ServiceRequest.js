import React, { Fragment, useState } from 'react';
import Map from '../Map/Map'
import Photo from '../UsersProfile/Photo'
import ImgAddAuto from '../ImgAddAuto/ImgAddAuto'
import MyMethod from '../MyPaymentMethod/MyMethod'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import './ServiceRequest.css'


const ServiceRequest = () => {
    //state paraa guardar la lat y lng y despues mostrar el marker
    const [marker, setMarker] = useState({});
    const [mark, setMark] = useState(false);


    return (
        <Fragment>
            <div className="container-photo-auto">
                <Photo></Photo>
                <Typography variant="h6" gutterBottom>
                    En dónde te encuentras
            </Typography>
                <Map
                    marker={marker}
                    setMarker={setMarker}
                    mark={mark}
                    setMark={setMark}
                />
                <div>
                    <p>{marker.address}</p>
                </div>
                <Typography variant="h6" gutterBottom>
                    En cuál coche viajas
            </Typography>
                <ImgAddAuto></ImgAddAuto>


            </div>

            <MyMethod
                setMarker={setMarker}
                marker={marker} />
        </Fragment>

    )
}

export default ServiceRequest;