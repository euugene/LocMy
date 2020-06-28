import React from "react";
import classes from './Persons.module.css';
import Person from "./Person/Person";
import {NavLink} from "react-router-dom";

const Persons = () => {
    return (
        <div className={classes.persons}>
            <div className={classes.personLabel}> Persons</div>

            <div className={classes.personItems}>
                <Person id="1" name="Petr"></Person>
                <Person id="2" name="Lena"></Person>
                <Person id="3" name="Andrey"></Person>
                <Person id="4" name="Igor"></Person>
                <Person id="5" name="Dima"></Person>

            </div>
        </div>
    );
}

export default Persons;