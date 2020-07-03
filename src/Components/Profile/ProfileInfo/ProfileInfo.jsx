import React from "react";
import classes from './ProfileInfo.module.css';
import GeneralProfileInfo from "./GeneralProfileInfo/GeneralProfileInfo";
import ProfileDescription from "./ProfileDescription/ProfileDescription";

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfo}>

            <GeneralProfileInfo name="Tomas" surname="Twitch" age="20"/>
            <ProfileDescription desciption="About me + possibility of adjustment"/>
            <img className={classes.profileImg}
                 src={"https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"}/>

        </div>
    );
}

export default ProfileInfo;