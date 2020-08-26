import React from 'react';
import { TextField, Button } from '@material-ui/core';
import Photo from '../UsersProfile/Photo'
import ImgAddAuto from '../ImgAddAuto/ImgAddAuto'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SelectAdress from '../Selects/SelectAdress';
import './ServiceRequest.css'
import styles from './styles.module.css';


const ServiceRequestClient_1 = () => {

    return (
        <div className="container-photo-auto">
            <Photo></Photo>
            <Typography variant="h6" gutterBottom>
                En dónde te encuentras
            </Typography>
            <div className={styles.location}>
                <TextField id="standard-basic" label="" type="select" /> Para encontrar tu ubicación automáicamente, activa la ubicación de tu dispositivo.
            </div>

            <SelectAdress />

            <Typography variant="h6" gutterBottom>
                En cuál coche viajas
            </Typography>
            <ImgAddAuto></ImgAddAuto>

            <div className="button2">
                <Button fullWidth className={styles.button1}>
                    ¿Hoy usas otro Auto?
                </Button>
            </div>

            <h4>Mí método de pago</h4>
            <div className={styles.paypal}>
                <TextField id="standard-basic" label="Pagar con Paypal" type="select" /> 
            </div>

            <div className="button1">
                <Button fullWidth >
                <p>CONFIRMA EL LAVADO</p>
                </Button>
            </div>
        </div>
    )
}

export default ServiceRequestClient_1;