import React from "react";
import './Profile.module.css';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>

            <div className={classes.aboutPerson}>
                <img className={classes.profileImg}
                     src={"https://i.pinimg.com/736x/0c/a9/e2/0ca9e28dcb12dc698cfd2beda6d6fa64--youtube.jpg"}/>
                     <div className={classes.aboutPersonText}>
                <div className={"name"}> Tomas</div>
                <div className={"surname"}> Twich</div>
                <div className={"age"}> 20 years</div>
                <div className={""}></div>
                     </div>
            </div>

            <div>About me + possibility of adjustment</div>
            <div>Notation
                <div>comment 1</div>
                <div>comment 2</div>
            </div>
        </div>
    );
}

export default Profile;