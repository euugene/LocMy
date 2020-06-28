import React from "react";
import classes from './Persons.module.css';
import Person from "./Person/Person";
import {NavLink} from "react-router-dom";

const Persons = () => {
    return (
        <div className={classes.persons}>
            <div className={classes.personLabel}> Persons</div>

            <div className={classes.personItems}>
                <div className={classes.item}>
                    <NavLink className={classes.itemLink} to="/dialogs/1">Petr</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className={classes.itemLink} to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className={classes.itemLink} to="/dialogs/3">Lena</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className={classes.itemLink} to="/dialogs/4">Igor</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink className={classes.itemLink} to="/dialogs/5">Dima</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Persons;