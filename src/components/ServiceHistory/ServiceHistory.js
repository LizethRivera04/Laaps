import React from 'react';
import { Container, Typography } from '@material-ui/core';
import AddressList from './AddressList';
import Services from './Services';
import Photo from '../UsersProfile/Photo';
import ImgAddAuto from '../ImgAddAuto/ImgAddAuto';

const ServiceHistory = () => {
    return ( 
        <Container>
            <Photo />
            <AddressList/>
            <Typography variant="h6" gutterBottom>Mis coches</Typography>
            <ImgAddAuto/>
            <Typography variant="h6" >Servicios</Typography>
            <Services/>
        </Container>
     );
}
 
export default ServiceHistory;