import React, { Fragment, useState } from 'react';
import Photo from '../UsersProfile/Photo'
import Map from '../Map/Map'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import firebase from 'firebase/app';

import './Solicited.css'
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),

    }
}));




const Solicited = () => {
    const db = firebase.firestore()
    const [user, setUser] = useState({})
    const classes = useStyles();
    /*  firebase.auth().onAuthStateChanged(function (user) {
         if (user) {
             const docRef = db.collection('users/').doc(user.uid);
             docRef.get().then(function (snapshot) {
                 let myData = snapshot.data();
                 // console.log(myData)
                 setUser({
                     email: myData.email,
                     name: myData.name,
                     services: myData.services,
                     uid: myData.uid
                 })
                 return myData
             })
         } else {
             // No user is signed in.
             console.log('No user');
         }
     });
      */

    return (

        <Fragment>
            <div className="container-solicited">
                <Photo />
                <div className="container-status-wash">
                    <p>Lavado:</p>

                    <p className="status">SOLICITADO</p>
                </div>
                <div className="card-location-worker">
                    <div className="worker-added">
                        <Avatar alt="Remy Sharp" src='../logo512.png' />
                        <div className="worker-info">
                            <p>Adrián González</p>
                            <p>Lllega en 10 min a tu ubicación</p>
                        </div>

                    </div>
                    <Map />
                    <div className="order-summary">
                        <p>Coche</p>
                        <p>Se pagará con PayPal $130.00</p>
                        <div className="btn-service-canceled">
                            <Button>CANCELAR SERVICIO</Button>
                        </div>

                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Solicited;
