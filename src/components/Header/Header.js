import React from 'react';
import './Header.css';
import { Toolbar, IconButton, AppBar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../imgs/Logo.png'

const Header = () => {
    return ( 
            <AppBar position="sticky">
              <Toolbar>
                <img src={logo} alt="logo" className="logo"/>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon className="menu-icon"/>
                </IconButton>
              </Toolbar>
          </AppBar>
     );
}
 
export default Header;
