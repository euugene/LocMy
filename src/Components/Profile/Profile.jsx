import React from "react";
import classes from './Profile.module.css';
import MyNotations from "./Notations/MyNotations";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = () => {
    return (
        <div className={classes.profile}>
            <ProfileInfo/>
            <MyNotations />
        </div>
    );
}

export default Profile;