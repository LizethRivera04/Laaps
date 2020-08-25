import React from 'react';
import './Header.css';
import { Toolbar, IconButton, Typography, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return ( 
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h6" >Laaps</Typography>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </Toolbar>
          </AppBar>
     );
}
 
export default Header;