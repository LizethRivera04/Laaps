import React, { useEffect, Fragment } from 'react';
import './Services.css';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const Services = () => {
    const db = firebase.firestore();
    const [value, setValue] = React.useState(5);
    const [services, setServices] = React.useState([])

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            const docRef = db.collection('users/').doc(user.uid);
            docRef.onSnapshot((snapshot) => {
              let user = snapshot.data();
              setServices(user.services)
            })
          } else {
            console.log('No user');
          }
        });
      }, [])

    return ( 
        <Fragment>
            {
                services.map(service => (
                    <Grid item xs={12} md={6}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <ListItemText
                                primary={service.name}
                                primaryTypographyProps={{variant:"subtitle2"}}
                                secondary={
                                        <React.Fragment>
                                        <Typography component="p" variant="caption" color="textPrimary">20/20/2020</Typography>
                                        <Typography component="p" variant="caption" color="textPrimary">{service.address}</Typography>
                                        </React.Fragment>
                                    }
                                />
                                <Typography variant="subtitle2">{service.cost}</Typography>
                            </ListItem>
                        </List>
                        <div className="rating-container">
                            <Typography variant="subtitle2" display="inline">Tu calificación a: </Typography>
                            <Rating
                                size="small"
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                            </div>
                            <Divider />
                    </Grid>
                ))
            }
        </Fragment>
        
     );
}
 
export default Services;


