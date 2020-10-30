import React, { Component } from 'react';
import styled from 'styled-components';
import profileImg from '../../pics/profile_icon.png';

const StyledImg = styled.img`
    margin: 5px 10px 5px 10px;
    filter: invert(100%);
    height: 50px;
    width: auto;
`;

class ProfileIcon extends Component {
    render() {
        return (
            <div>
                <StyledImg src={profileImg}/> 
            </div>
        );
    }
}


export default ProfileIcon;