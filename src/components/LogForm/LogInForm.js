import React from 'react';
import { TextField, Container, Button, FormControl } from '@material-ui/core';

const LogForm = () => {
    return ( 
        <Container>
            <h3>Inicia sesión</h3>
            <h4>¿Todavía sin cuenta? Registrate</h4>
            <FormControl direction="column">
                <TextField id="standard-basic" label="Correo" />
                <TextField id="standard-basic" label="Contraseña" type="password"/>
                <Button variant="contained" color="primary">Ingresar</Button>
            </FormControl>
            <div>
                <h4>Accede con</h4>
                <Button variant="contained" color="primary">FACEBOOK</Button>
                <Button variant="contained" color="primary">GOOGLE</Button>
            </div>
      </Container>
     );
}
 
export default LogForm;