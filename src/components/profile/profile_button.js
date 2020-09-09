import React, { Component } from 'react';
import profileImg from '../../pics/profile_icon.png';

class ProfileIcon extends Component {
    render() {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'right'
            }}>
                <img 
                style=
                {{
                    margin: '5px 10px 5px auto',
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