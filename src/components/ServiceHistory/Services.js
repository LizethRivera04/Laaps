import React from 'react';
import './Services.css';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText, Grid, Container, Divider } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const Services = () => {
    const [value, setValue] = React.useState(2);

    return ( 
        <Grid item xs={12} md={6}>
          <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="Adrian Gonzalez"
                  primaryTypographyProps={{variant:"subtitle2"}}
                  secondary={
                        <React.Fragment>
                        <Typography component="p" variant="caption" color="textPrimary">21/08/2020</Typography>
                        <Typography component="p" variant="caption" color="textPrimary">Santa Fe, CDMX</Typography>
                        </React.Fragment>
                    }
                />
                <Typography variant="subtitle2">$130.00</Typography>
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
     );
}
 
export default Services;


