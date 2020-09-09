import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ProfileIcon from '../components/profile/profile_button';
import MenuButton from '../components/Menu_Button.js';

const Header = styled.div`
    margin: '5px 10px 5px auto';
    display: grid;
    grid-template-columns: 1fr auto 0.5fr 0.5fr 0.5fr 1fr 0.5fr;
    background: rgba(56, 62, 74, 0.3);
    justify-content: center;
    align-items: center;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    color: #61dafb;
    font-size: 2rem;
    font-family: 'Press Start 2P', cursive;
`;

const TopBar = () => {
    return (
        <Header>
            <Logo>FliPER</Logo>
            <div></div>
            <Link to="/login" style={{ textDecoration: 'none'}}>
                <MenuButton text="Login"/>
            </Link>
            <MenuButton text="Random Game"/>
            <Link to="/upload" style={{ textDecoration: 'none' }}>
                <MenuButton text="Upload"/>
            </Link>

            <input type="text"></input>
            <Link to="/profile" style={{ textDecoration: 'none' }}>
                <ProfileIcon/>
            </Link>
            
        </Header>
    );
}

export default TopBar;