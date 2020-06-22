import React from "react";
import classes from './Navbar.module.css';
const Navbar = () => {
    return(
        <nav className = {classes.menu}>
            <a className = {classes.item}>Profile</a>
            <a className = {classes.item}>Messages</a>
            <a className = {classes.item}>Locations</a>
            <a className = {classes.item}>News</a>
            <a className = {classes.item}>Music</a>
            <a className = {classes.item}>Settings</a>
        </nav>
    );
}

export default Navbar;