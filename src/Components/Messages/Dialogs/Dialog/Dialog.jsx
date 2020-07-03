import React from "react";
import classes from './Dialog.module.css';

const Dialog = (props) => {

    return (
        <div className={classes.dialogMessage}>
            <span className={classes.currentMessage}>
                {props.message}
                <img className={classes.checkImg} src={require ("./../../../../images/check-solid.svg")}/>
            </span>
        </div>
    );
}

export default Dialog;