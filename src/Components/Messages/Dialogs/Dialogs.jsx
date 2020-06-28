import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsLabel}>Dialogs </div>
            <Dialog message = "Hi"></Dialog>

        </div>
    );
}

export default Dialogs;