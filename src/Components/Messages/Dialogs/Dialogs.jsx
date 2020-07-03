import React from "react";
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";

const Dialogs = () => {
    let messagesData = [
        {id: "1", text: "Hi"},
        {id: "2", text: "How are you?"},
        {id: "3", text: "What is your favorite kind of beer?"},
    ]
    let messagesElements = messagesData.map(message => <Dialog id = {message.id} message = {message.text}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsLabel}>Dialogs </div>
            {messagesElements}

        </div>
    );
}

export default Dialogs;