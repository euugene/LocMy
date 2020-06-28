import React from "react";
import classes from './Messages.module.css';
import Persons from "./Persons/Persons";
import Dialogs from "./Dialogs/Dialogs";

const Messages = () => {
    return (
        <div className={classes.messages}>
            <Persons/>
            <Dialogs/>
        </div>

    );
}

export default Messages;