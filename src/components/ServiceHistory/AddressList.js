import React, { useState, useEffect } from 'react';
import { Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const AddressList = () => {
  const db = firebase.firestore();
  const [address, setAddress] = useState([])

  useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          const docRef = db.collection('users/').doc(user.uid);
          docRef.onSnapshot((snapshot) => {
            let user = snapshot.data();
            setAddress(user.services)
          })
        } else {
          console.log('No user');
        }
      });
    }, [])
    const result = Object.values(address.reduce((a, c) => (a[c.address] = c, a), {}));

    console.log(result)
    return ( 
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            Mis direcciones
          </Typography>
          <div >
          {
            result.map(a => (
              <List>
                <ListItem>
                  <ListItemText
                    primary={a.address}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
            ))
          }  
          </div>
        </Grid>
     );
}
 
export default AddressList;