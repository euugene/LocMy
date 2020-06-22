import React from "react";
import classes from './Header.module.css';
const Header = () => {
    return(
        <header className={classes.header}>
            <img className={classes.headerLogo}/>
            <div className={classes.headerTitle}>
                <span>LocMy.com </span>
            </div>
        </header>
    );
}

export default Header;