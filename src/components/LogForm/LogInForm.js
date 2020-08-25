import React, { useState } from 'react';
import './Form.css';
import { TextField, Container, Button, FormControl, Typography } from '@material-ui/core';
import auth from '../../firebase';
import { Link } from 'react-router-dom';

const LogForm = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    
    return ( 
        <Container className="login">
            <h3>Inicia sesión</h3>
            <h4>¿Todavía sin cuenta? <Link to="/register">Regístrate</Link></h4>
            <FormControl direction="column">
                <TextField id="email" label="Correo" onChange={e=>setUserData({...userData, email: e.target.value})}/>
                <TextField id="password" label="Contraseña" type="password" onChange={e=>setUserData({...userData, email: e.target.value})}/>
                <Typography variant="subtitle2" display="block" color="primary" gutterBottom>
                    He olvidado mi contraseña
                </Typography>
                <Button variant="contained" color="primary">Ingresar</Button>
            </FormControl>
            <div className="login">
                <Typography variant="subtitle1">Accede con</Typography>
                <Button variant="contained" color="primary" onClick={()=> auth.facebook()}>FACEBOOK</Button>
                <Button variant="contained" color="primary" onClick={()=> auth.google()}>GOOGLE</Button>
            </div>
      </Container>
     );
}
 
export default LogForm;