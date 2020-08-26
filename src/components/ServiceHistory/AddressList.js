import React from 'react';
import { Grid, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const AddressList = () => {
    function generate(element) {
        return [0, 1].map((value) =>
          React.cloneElement(element, {
            key: value,
          }),
        );
      }
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return ( 
        <Grid item xs={12} md={6}>
          <Typography variant="h6" >
            Mis direcciones
          </Typography>
          <div >
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Direcciones"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
     );
}
 
export default AddressList;