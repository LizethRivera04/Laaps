import React from 'react';
import saveServiceBD from '../../firebase';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Confirm = ({ marker }) => {
    const saveDB = () => {
        saveServiceBD.saveServiceBD(marker)
    }

    return (
        <div className="container-btn-confirm">
            <Link to="/solicited">
                <Button variant="contained" color="primary" fullWidth onClick={saveDB}>
                    CONFIRMA EL LAVADO
            </Button>
            </Link>
        </div>
    )
}

export default Confirm;