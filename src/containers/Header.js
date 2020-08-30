import React from 'react';
import './Header.css';
import ProfileIcon from '../components/profile/profile_button';

const Header = () => {
    return (
        <div className="head">
            <div style={{alignSelf: 'center'}}>FliPER</div>
            <ProfileIcon/>
        </div>
    );
}

export default Header;