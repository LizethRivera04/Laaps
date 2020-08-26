import React from 'react';
import Photo from './noPhoto.png'
import './ImgAddAuto.css'
import Button from '@material-ui/core/Button';


const ImgAddAuto = () => {

    return (
        <div>
            <div className="content-auto">
                <div className="container-img-auto">
                    <img src={Photo} className="img-auto"></img>
                </div>
            </div>
            <div className="button1">
                <Button fullWidth>
                    <p>Primary</p>
                </Button>
            </div>
        </div>
    )
}

export default ImgAddAuto;