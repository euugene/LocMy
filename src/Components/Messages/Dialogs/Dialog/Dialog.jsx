import React from "react";
import classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div className={classes.dialogMessage}>{props.message}</div>
    );
}

export default Dialog;