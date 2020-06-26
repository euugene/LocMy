import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return(
        <nav className = {classes.menu}>
            <NavLink to = "profile" className = {classes.item} activeClassName = {classes.act} >Profile</NavLink>
            <NavLink to = "messages" className = {classes.item} activeClassName = {classes.act}>Messages</NavLink>
            <NavLink to = "locations" className = {classes.item} activeClassName = {classes.act}>Locations</NavLink>
            <NavLink to = "news" className = {classes.item} activeClassName = {classes.act}>News</NavLink>
            <NavLink to = "music" className = {classes.item} activeClassName = {classes.act}>Music</NavLink>
            <NavLink to = "settings" className = {classes.item} activeClassName = {classes.act}>Settings</NavLink>
        </nav>
    );
}

export default Navbar;