import React from "react";
import classes from './Persons.module.css';
import Person from "./Person/Person";

const Persons = (props) => {

    let personsElements = props.personData.map(person => (<Person id = {person.id} name = {person.name}/>));

    return (
        <div className={classes.persons}>
            <div className={classes.personLabel}>Friends</div>
            <div className={classes.personItems}>
                {personsElements}
            </div>
        </div>
    );
}

export default Persons;