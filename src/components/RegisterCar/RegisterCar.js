import React from 'react'
import { TextField, Container, Button, FormControl } from '@material-ui/core';
import ImageCar from '../ImageCar/ImageCar';
import SelectMarca from '../Selects/SelectMarca';
import SelectColor from '../Selects/SelectColor';
import styles from './styles.module.css';

const RegCar = () => {
  return (
    <Container>      
      <h3>Ingresa tus datos</h3>
      <h4>1.- Agrega los datos de tu automóvil</h4>
      <div className={styles.photocar}>
        Aquí va la foto del carro
      </div>
        <ImageCar />
      <FormControl direction="column">
        <SelectMarca />
        <SelectColor />
        <TextField id="standard-basic" label="Placa" />

        <h4>2.- Agrega tu metodo de pago</h4>
        
        <TextField id="standard-basic" label="Pagar con Paypal" type="select"/> 
        <p className={styles.aviso}>Aviso: Serás redirigido para iniciar sesión en la página de PayPal</p>

        <Button variant="contained" color="primary">SOLICITA UN LAVADO AHORA</Button>

      </FormControl>
    </Container>
  );
}


export default RegCar;