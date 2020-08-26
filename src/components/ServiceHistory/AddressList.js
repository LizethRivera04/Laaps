import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const AddressList = () => {
    return ( 
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            Mis direcciones
          </Typography>
          <div >
            <List>
                <ListItem>
                  <ListItemText
                    primary="Direcciones"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
            </List>
          </div>
        </Grid>
     );
}
 
export default AddressList;