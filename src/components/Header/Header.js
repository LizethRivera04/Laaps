import React from 'react';
import './Header.css';
import { Toolbar, IconButton, AppBar, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../../imgs/Logo.png'
import auth from '../../firebase'
import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth';

const Header = () => {
  var user = firebase.auth().currentUser;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return ( 
            <AppBar position="sticky">
              <Toolbar>
                <img src={logo} alt="logo" className="logo"/>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                  <MenuIcon className="menu-icon"/>
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {
                    user ? (<MenuItem>Cerrar sesión</MenuItem>) 
                    : (<MenuItem>Ingresar</MenuItem>)
                  }
                  <MenuItem onClick={handleClose}>Somos Laaps</MenuItem>
                  <MenuItem onClick={handleClose}>Colaboradores</MenuItem>
                  <MenuItem onClick={handleClose}>Ayuda y atención</MenuItem>
                </Menu>
              </Toolbar>
          </AppBar>
     );
}

export default Header;
