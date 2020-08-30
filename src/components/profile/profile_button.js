import React, { Component } from 'react';
import profileImg from '../../pics/profile_icon.png';

class ProfileIcon extends Component {
    render() {
        return (
            <img className="absolute right-0 db-ns grow fr mr5-ns" 
                style={{filter: 'invert(100%)', height: '50px', width: 'auto'}}
                src={profileImg}
            />
        );
    }
}


export default ProfileIcon;