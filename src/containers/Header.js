import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import ProfileIcon from '../components/profile/profile_button';

const Header = () => {
    return (
        <div className="head">
            <div style={{alignSelf: 'center'}}>FliPER</div>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
                <ProfileIcon/>
            </Link>
            
        </div>
    );
}

export default Header;