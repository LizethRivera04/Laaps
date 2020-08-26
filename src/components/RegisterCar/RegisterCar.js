import React, { useState } from 'react'
import { TextField, Container, Button, FormControl } from '@material-ui/core';
import ImageCar from '../ImageCar/ImageCar';
import SelectMarca from '../Selects/SelectMarca';
import SelectColor from '../Selects/SelectColor';
import ImgAddCar from './ImgAddCar'
import styles from './styles.module.css';

const RegCar = () => {

  const [userAutoData, setUserAutoData] = useState({
    photo: '',
    marca: '',
    color: '',
    placa: ''
  })
console.log(userAutoData);


  return (
    <Container>      
      <h3>Ingresa tus datos</h3>
      <h4>1.- Agrega los datos de tu automóvil</h4>
      <div className={styles.photocar}>
        <ImgAddCar></ImgAddCar>
      </div>
      <div className={styles.imgcar}>
        <ImageCar />
      </div>
      <FormControl direction="column">
        <SelectMarca />
        <SelectColor />
        <TextField id="standard-basic" label="Placa" />

        <h4>2.- Agrega tu método de pago</h4>
        <div className={styles.paypal}>
        <TextField id="standard-basic" label="Pagar con Paypal" type="select" /> 
        </div>
        <p className={styles.aviso}>Aviso: Serás redirigido para iniciar sesión en la página de PayPal</p>

        <div className={styles.button1}>
          <Button fullWidth ><p>SOLICITA UN LAVADO AHORA</p></Button>
         </div>

      </FormControl>
    </Container>
  );
}


export default RegCar;