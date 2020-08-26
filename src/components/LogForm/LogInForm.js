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
                    <p className="forgetPass">He olvidado mi contraseña</p>
                </Typography>
                <div className="button1">
                    <Button fullWidth >
                        <p>Ingresar</p>
                    </Button>
                </div>

            </FormControl>
            <div className="login">
                <Typography variant="subtitle1">
                    <p className="access">Accede con</p>
                </Typography>

                <div className="button2">
                    <Button fullWidth onClick={()=> auth.facebook()}>
                        <p>FACEBOOK</p> 
                    </Button>
                </div>

                <div className="button2">
                    <Button fullWidth onClick={()=> auth.google()} >
                        <p>GOOGLE</p> 
                    </Button>
                </div>
                

            </div>
      </Container>
     );
}
 
export default LogForm;