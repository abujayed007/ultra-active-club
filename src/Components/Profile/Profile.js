import React from 'react';
import './Profile.css'
const Profile = () => {
    return (
        <div>
            <div className="profile">
            <img src="./jayed.jpg" alt="" />
            <h2>Ibne Abu Jayed</h2>
            </div>
            <div className="profile-info">
                <div>
                <h2>75KG<p>weight</p> </h2>
                </div>
                <div>
                <h2>5.6"<p>Height</p> </h2>
                </div>
                <div>
                <h2>28 Years<p>Age</p> </h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;