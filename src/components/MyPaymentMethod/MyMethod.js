import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Confirm from './Confirm'
import Radio from '@material-ui/core/Radio';
import { Link } from "react-router-dom";
import saveServiceBD from '../../firebase';
import './MyMethod.css'

const MyMethod = ({ setMarker, marker }) => {
    const saveMethod = (e) => {
        if (e.target.name != undefined) {

            setMarker({ ...marker, payMeth: e.target.name, status: "SOLICITADO" })
            return
        }
        setMarker({ ...marker, payMeth: 'paypal', status: "SOLICITADO" })
    }


    return (
        <Fragment>
            <div className="content-payment">
                <div className="container-method">
                    <i className="fab fa-paypal"></i>
                    <div className="container-paypal"
                        onClick={saveMethod}
                    >
                        <p name="paypal">PayPal</p>
                        <p name="paypal">correo@correo.com</p>
                    </div>

                </div>
            </div>
            <div className="radio-cash">
                <FormControlLabel name="efectivo" control={<Radio color="primary" size="small" onClick={saveMethod} />} label="Efectivo" />
            </div>
            <Confirm
                marker={marker} />



        </Fragment>

    )
}


export default MyMethod;