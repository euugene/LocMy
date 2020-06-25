import React from "react";
import classes from './Header.module.css';
const Header = () => {
    return(
        <header className={classes.header}>
                <span>LocMy.com </span>
                <button className={classes.button}> </button>
        </header>
    );
}

export default Header;