import React from 'react';
import Map from '../Map/Map'
import Photo from '../UsersProfile/Photo'
import ImgAddAuto from '../ImgAddAuto/ImgAddAuto'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './ServiceRequest.css'


const ServiceRequest = () => {



    return (
        <div className="container-photo-auto">
            <Photo></Photo>
            <Typography variant="h6" gutterBottom>
                En dónde te encuentras
            </Typography>
            <Map></Map>
            <Typography variant="h6" gutterBottom>
                En cuál coche viajas
            </Typography>
            <ImgAddAuto></ImgAddAuto>

        </div>


    )
}

export default ServiceRequest;