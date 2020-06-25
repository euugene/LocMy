import React from "react";
import classes from './Logo.module.css';

const Logo = () => {
    return (
        <div className={classes.logo}>
            <img src={require("./../../images/logo.png")} className={classes.logoImagine}></img>
            <span className={classes.logoText}>It is logo of the site</span>
        </div>
    );
}

export default Logo;