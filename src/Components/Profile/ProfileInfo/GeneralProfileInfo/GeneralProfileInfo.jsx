import React from "react";
import classes from './GeneralProfileInfo.module.css';

const GeneralProfileInfo = (props) => {
    return (
        <div className={classes.aboutPersonText}>
            <div className={classes.name}>{props.name} </div>
            <div className={classes.surnme} >{props.surname} </div>
            <div className={classes.age}>{props.age}</div>

        </div>

);
}

export default GeneralProfileInfo;