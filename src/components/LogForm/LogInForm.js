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
            <h4>¿Todavía sin cuenta? <Link to="/register">Regístrate</Link></h4>
            <FormControl direction="column">
                <TextField type="email" label="Correo" onChange={e=>setUserData({...userData, email: e.target.value})}/>
                <TextField id="password" label="Contraseña" type="password" onChange={e=>setUserData({...userData, email: e.target.value})}/>
                <Typography variant="caption" align="right" display="block" color="primary" gutterBottom>
                    He olvidado mi contraseña
                </Typography>
                <Button variant="contained" color="primary" className="button" onClick={()=> auth.loginUser(userData.email, userData.password)}>Ingresar</Button>
            </FormControl>
            <div className="login">
                <Typography variant="subtitle1">Accede con</Typography>
                <Button variant="outlined" color="primary" className="button" onClick={()=> auth.facebook()}>FACEBOOK</Button>
                <Button variant="outlined" color="primary" className="button" onClick={()=> auth.google()}>GOOGLE</Button>
            </div>
        </Container>
    );
}

export default LogForm;