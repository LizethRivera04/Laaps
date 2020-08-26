import React from 'react';
import saveServiceBD from '../../firebase';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import './Confirm.css'

const Confirm = ({ marker }) => {
    const saveDB = () => {
        saveServiceBD.saveServiceBD(marker)
    }

    return (
        <div className="container-btn-confirm">
            <Link to="/solicited">
                <div className="button1">
                    <Button fullWidth onClick={saveDB}>
                        <p>CONFIRMA EL LAVADO</p>
                    </Button>
                </div>
            </Link>
        </div>
    )
}

export default Confirm;