import React from "react";
import classes from './Messages.module.css';
import Persons from "./Persons/Persons";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {
    return (
        <div className={classes.messages}>
            <Persons personData={props.personData}/>
            <Dialogs/>
        </div>

    );
}

export default Messages;