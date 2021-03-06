import React, { useState } from 'react';
import { Container, FormControl, TextField, Button } from '@material-ui/core';
import auth from '../../firebase';
import { Link, useHistory } from 'react-router-dom';
import './Form.css';

const RegisterForm = () => {
    let history = useHistory()
    auth.fb.auth().onAuthStateChanged(user => {
        if(user) {
            history.push('/regcar')
        }
    })
    const [registerUserData, setRegisterUserData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        passwordconfirm: ''
    })
    console.log(registerUserData)

    const createAccount = () => {
        if(registerUserData.password === registerUserData.passwordconfirm) {
            auth.createUser(registerUserData.email, registerUserData.password, registerUserData.name, registerUserData.lastname)
        } else {
            alert("Confirma que las dos contraseñas ingresadas coincidan")
        }
    }
    return (
        <Container>
            <h3>Crear Cuenta</h3>
            <h4>¿Ya tienes cuenta? <Link to="/"><span>Inicia sesión</span></Link></h4>
            <FormControl direction="column">
                <TextField label="Nombre*" onChange={e => setRegisterUserData({ ...registerUserData, name: e.target.value })} />
                <TextField label="Apellidos*" onChange={e => setRegisterUserData({ ...registerUserData, lastname: e.target.value })} />
                <TextField label="Correo electrónico*" onChange={e => setRegisterUserData({ ...registerUserData, email: e.target.value })} />
                <TextField label="Contraseña*" type="password" onChange={e => setRegisterUserData({ ...registerUserData, password: e.target.value })} />
                <TextField label="Confirmar contraseña*" type="password" onChange={e => setRegisterUserData({ ...registerUserData, passwordconfirm: e.target.value })} />
            </FormControl>

                <div className="button1CC">
                    <Button fullWidth onClick={() => createAccount()}>
                    <p>CREAR CUENTA</p></Button>
                </div>
        </Container>
    );
}

export default RegisterForm;