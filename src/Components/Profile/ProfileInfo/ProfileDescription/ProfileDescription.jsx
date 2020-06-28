import React from "react";
import classes from './ProfileDescription.module.css';

const ProfileDescription = (props) => {
    return (
            <div className={classes.profileDescription}>{props.desciption}</div>
    );
}

export default ProfileDescription;