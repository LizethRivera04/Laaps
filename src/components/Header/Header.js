import React from 'react';
import { Toolbar, IconButton, Typography, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return ( 
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    Laaps
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
     );
}

export default Header; 