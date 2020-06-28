import React from "react";
import classes from './Person.module.css';
import {NavLink} from "react-router-dom";

const Person = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={classes.item}>
            <NavLink className={classes.itemLink} to={path}>{props.name}</NavLink>
        </div>
    );
}

export default Person;