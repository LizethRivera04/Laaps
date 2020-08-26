import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import fileAutoStorage from '../../firebase';
import 'firebase/firestore'
import 'firebase/auth';
import firebase from 'firebase/app';
import styles from './styles.module.css';

const useStyles = makeStyles((theme) => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const ImageCar = () => {
  const [image, setImage] = useState(null);
  const classes = useStyles();
  const [user, setUser] = useState({})
  const db = firebase.firestore();

  const handleFile = (e) => {

    if (e.target.files) {
      let file = e.target.files[0]
      console.log(typeof file)
      setImage(file)
      fileAutoStorage.fileAutoStorage(file)

    }
    return
  }


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
    <div className={classes.root}>
      <img src={user.autos}></img>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={handleFile} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
    </div>
  );
}

export default ImageCar;