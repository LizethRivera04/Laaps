import React, { useState } from 'react'
import { TextField, Container, Button, FormControl } from '@material-ui/core';
import ImageCar from '../ImageCar/ImageCar';
import SelectMarca from '../Selects/SelectMarca';
import SelectColor from '../Selects/SelectColor';
import ImgAddCar from './ImgAddCar'
import styles from './styles.module.css';

const RegCar = () => {

  const [userAutoData, setUserAutoData] = useState({
    marca: '',
    color: '',
    placa: ''
  })
console.log(userAutoData);

const handleChange = (e) => {
  setUserAutoData({...userAutoData, [e.target.name]: e.target.value});
};


  return (
    <Container>      
      <h3>Ingresa tus datos</h3>
      <h4>1.- Agrega los datos de tu automóvil</h4>
      <div className={styles.imgcar}>
        <ImageCar userAutoData={userAutoData}/>
      </div>
      <FormControl direction="column">
        <SelectMarca userAutoData={userAutoData} setUserAutoData={setUserAutoData}/>
        <SelectColor userAutoData={userAutoData} setUserAutoData={setUserAutoData}/>
        <TextField id="standard-basic" label="Placa" name="placa" onChange={handleChange}/>

        <h4>2.- Agrega tu método de pago</h4>
{/*         <div className={styles.paypal}>
              <i className="fab fa-paypal"></i>        
              <TextField id="standard-basic" label="Pagar con Paypal" type="select" /> 
            </div> */}

          <div className="content-payment">
              <div className="container-method">
                  <i className="fab fa-paypal"></i>
                  <div className="container-paypal">
                      <p name="paypal">PayPal</p>
                  </div>
              </div>
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