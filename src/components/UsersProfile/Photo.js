import React, { Fragment, useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import indigo from '@material-ui/core/colors/indigo';
import fileUserStorage from '../../firebase';
import 'firebase/firestore'
import 'firebase/auth';
import firebase from 'firebase/app';
import './UserProfile.css'
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),

    },
    center: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5px"

    },
    input: {
        display: 'none',
    }


}));
const Photo = () => {
    //const firebase = useFirebaseApp()
    const db = firebase.firestore();
    const [image, setImage] = useState(null);
    const [user, setUser] = useState({})
    const classes = useStyles();


    const handleFile = (e) => {
        if (e.target.files) {
            let file = e.target.files[0]
            console.log(typeof file)
            setImage(file)
            fileUserStorage.fileUserStorage(file)

        }
        return
    }
    //console.log(user);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                const docRef = db.collection('users/').doc(user.uid);
                docRef.onSnapshot((snapshot) => {
                    let myData = snapshot.data();
                    setUser(myData)
                    return myData
                })
            } else {
                // No user is signed in.
                console.log('No user');
            }
        });
    }, [])


    return (
        <Fragment>
            <div className="icon-center container-avatar">
                <Avatar alt="Remy Sharp" src={user.photo} className={classes.large} />
            </div>
            <div className=" icon-center">

                <label htmlFor="icon-button-file" className="absolute">
                    <IconButton color="primary" aria-label="upload picture" component="span" className="absolute" >
                        <PhotoCamera />
                    </IconButton>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={handleFile} />
                {/*  <Icon className="absolute" >add_circle</Icon> */}
            </div>
            <Typography variant="h6" gutterBottom color="primary" className={classes.center}>
                {user.name}
            </Typography>


        </Fragment>

    )
}

export default Photo