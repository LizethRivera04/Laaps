import React from 'react';
import { TextField, Button, FormControl } from '@material-ui/core';
import Photo from '../UsersProfile/Photo'
import ImgAddAuto from '../ImgAddAuto/ImgAddAuto'
import Typography from '@material-ui/core/Typography';
import SelectMarca from '../Selects/SelectMarca';
import SelectColor from '../Selects/SelectColor';
import './AddCar.css'


const AddCar = () => {

    return (
        <div className="container-photo-auto">
            <Photo></Photo>
            <Typography variant="h6" gutterBottom>
                Agrega los datos de tu auto.
            </Typography>
            <ImgAddAuto></ImgAddAuto>
            <FormControl direction="column">
        <SelectMarca />
        <SelectColor />
        <TextField id="standard-basic" label="Placa" />
      </FormControl>
            <div className="button1">
            <Button fullWidth >
               <p>Agregar Auto</p> 
            </Button>
            </div>
        </div>
    )
}

export default AddCar;