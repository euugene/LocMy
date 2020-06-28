import React from "react";
import './MyNotations.module.css';
import classes from './MyNotations.module.css';
import Notation from "./Notation/Notation";
import NotationLogo from "./NotationLogo/NotationLogo";
const MyNotations = () => {
    return (

            <div>
                <NotationLogo/>
                <Notation/>
                <Notation/>
                <Notation/>
                <Notation/>
            </div>

    );
}

export default MyNotations;