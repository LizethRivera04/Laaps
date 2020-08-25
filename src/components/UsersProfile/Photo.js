import React, { Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import indigo from '@material-ui/core/colors/indigo';
import './UserProfile.css'
const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),

    },
    center: {
        display: "flex",
        justifyContent: "center",
        marginTop: "5px"

    },
    input: {
        display: 'none',
    }


}));
const Photo = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className="icon-center container-avatar">
                <Avatar alt="Remy Sharp" src='../logo512.png' className={classes.large} />
            </div>
            <div className=" icon-center">
                <label htmlFor="icon-button-file" className="absolute">
                    <IconButton color="primary" aria-label="upload picture" component="span" className="absolute">
                        <PhotoCamera />
                    </IconButton>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                {/*  <Icon className="absolute" >add_circle</Icon> */}
            </div>
            <Typography variant="h6" gutterBottom color="primary" className={classes.center}>
                Carlos Estradaa
            </Typography>


        </Fragment>

    )
}

export default Photo