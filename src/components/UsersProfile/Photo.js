import React, { Fragment, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import indigo from '@material-ui/core/colors/indigo';
import fileUserStorage from '../../firebase';
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
    const [image, setImage] = useState(null);
    const classes = useStyles();

    const handleFile = (e) => {

        if (e.target.files) {
            let file = e.target.files[0]
            console.log(typeof file)
            setImage(file)
            fileUserStorage.fileUserStorage(file)

        }
        return
    }

    return (
        <Fragment>
            <div className="icon-center container-avatar">
                <Avatar alt="Remy Sharp" src='../logo512.png' className={classes.large} />
            </div>
            <div className=" icon-center">
                {/* <label for="file" id="labelFile" className="absolute "><i className="far fa-image" title="Upload"></i></label>
                <input type="file" accept="image/*" id="file" onChange={handleFile} /> */}

                <label htmlFor="icon-button-file" className="absolute">
                    <IconButton color="primary" aria-label="upload picture" component="span" className="absolute" >
                        <PhotoCamera />
                    </IconButton>
                </label>
                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={handleFile} />
                {/*  <Icon className="absolute" >add_circle</Icon> */}
            </div>
            <Typography variant="h6" gutterBottom color="primary" className={classes.center}>
                Carlos Estradaa
            </Typography>


        </Fragment>

    )
}

export default Photo