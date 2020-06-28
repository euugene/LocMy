import React from "react";
import classes from './Person.module.css';

const Person = () => {
    return (
        <div className={classes.person}>

        <div className={classes.personItems}>
        <div className={classes.item}>
            Petr
        </div>
            <div className={classes.item}>
                Andrey
            </div>
            <div className={classes.item}>
                Lena
            </div>
            <div className={classes.item}>
                Igor
            </div>
            <div className={classes.item}>
                Dima
            </div>
        </div>
        </div>
    );
}

export default Person;