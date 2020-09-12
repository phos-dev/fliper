import React, { Component } from 'react';
import profileImg from '../../pics/profile_icon.png';

class ProfileIcon extends Component {
    render() {
        return (
            <div>
                <img 
                style=
                {{
                    margin: '5px 10px 5px 10px',
                    filter: 'invert(100%)', 
                    height: '50px', 
                    width: 'auto'
                }}
                src={profileImg}
            />
            </div>
        );
    }
}


export default ProfileIcon;