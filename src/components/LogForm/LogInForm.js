import React, { useState } from 'react';
import './Form.css';
import { TextField, Container, Button, FormControl, Typography } from '@material-ui/core';
import auth from '../../firebase';
import { Link, useHistory } from 'react-router-dom';

const LogForm = () => {
    let history = useHistory()
    auth.fb.auth().onAuthStateChanged(user => {
        if(user) {
            history.push('/regcar')
        }
    })

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    return (
        <Container>
            <h3>Inicia sesión</h3>
            <h4>¿Todavía sin cuenta?<Link to="/register"><span> Regístrate</span></Link></h4>
            <FormControl direction="column">
                <TextField type="email" label="Correo" onChange={e=>setUserData({...userData, email: e.target.value})}/>
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
                    <Button fullWidth onClick={()=> auth.facebook()} >
                        <p><i class="fab fa-facebook"></i>FACEBOOK</p> 
                    </Button>
                </div>

                <div className="button2">
                    <Button fullWidth onClick={()=> auth.google()} >
                        <p><i class="fab fa-google"></i>GOOGLE</p> 
                    </Button>
                </div>
                

            </div>
        </Container>
    );
}

export default LogForm;