import React from 'react';
import Photo from './noPhoto.png'
import './ImgAddCar.css'
import Button from '@material-ui/core/Button';
import { borderRadius } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';


const ImgAddAuto = () => {

    return (

        <div>
            <div className="content-auto">
                <div className="container-img-auto">
                    <img src={Photo} className="img-auto"></img>
                </div>
            </div>
        </div>
    )
}

export default ImgAddAuto;