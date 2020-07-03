import React from "react";
import classes from './Person.module.css';
import {NavLink} from "react-router-dom";

const Person = (props) => {
    let path = "/messages/" + props.id;
    return (


        <NavLink className={classes.itemLink} activeClassName={classes.active} to={path}>
            <div className={classes.item}>


                <div className={classes.itemLinkText} aria-hidden="true">
                    <div className={classes.front}>
                        <img className={classes.itemLinkImagine}
                             src={require("./../../../../images/ava_notation.png")}/>
                        <div className={classes.frontText}>{props.name}</div>
                    </div>
                    <div className={classes.back}>
                        <img className={classes.itemLinkImagine}
                             src={require("./../../../../images/ava_notation.png")}/>
                        <div className={classes.backText}>Opened dialog with {props.name}</div>
                        </div>
                </div>

            </div>

        </NavLink>

    );
}

export default Person;