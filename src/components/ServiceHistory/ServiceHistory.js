import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import AddressList from './AddressList';
import Services from './Services';
import Photo from '../UsersProfile/Photo';
import ImgAddAuto from '../ImgAddAuto/ImgAddAuto';
import styles from '../RegisterCar/styles.module.css';

const ServiceHistory = () => {
    return ( 
        <Container>
            <Photo />
            <div className={styles.button1}>
                <Button fullWidth ><p>SOLICITA UN LAVADO AHORA</p></Button>
            </div>
            <AddressList/>
            <Typography variant="h6" gutterBottom>Mis coches</Typography>
            <ImgAddAuto/>
            <Typography variant="h6" gutterBottom>Mi método de pago</Typography>
            <div className="container-method">
                    <i className="fab fa-paypal"></i>
                    <div className="container-paypal"
                    >
                        <p name="paypal">PayPal</p>
                        <p name="paypal">correo@correo.com</p>
                    </div>
                </div>
            <Typography variant="h6" >Servicios</Typography>
            <Services/>
        </Container>
     );
}
 
export default ServiceHistory;