import React from "react";
import classes from './Notation.module.css';

const Notation = () => {
    return (

        <div className={classes.postBlock}>

            <img className={classes.postImg} src = {require ("./../../../../images/ava_notation.png")}/>
            <div className={"postText"}>comment 1</div>

        </div>

    );
}

export default Notation;