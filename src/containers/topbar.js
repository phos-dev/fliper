import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ProfileIcon from '../components/profile/profile_button';
import MenuButton from '../components/Menu_Button.js';

const Header = styled.div`
    margin: '5px 10px 5px auto';
    display: grid;
    background: rgba(56, 62, 74, 0.3);
    justify-content: center;
    align-items: center;
    width: 100%;
    grid-template-columns: 1fr auto auto auto 1fr auto;
    & div, a {
        display: grid;
        justify-self: center;
    }
    .Logo {
        justify-self: left;
        margin-left: 20px;
    }
    @media screen and (max-width: 968px) {
        & {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-items: center;
        }
        .Logo {
            justify-self: center;
            margin-left: 0px;
            grid-column: span 3;
        }
        & input {
            grid-column: span 2;
            width: 300px;
        }
    }
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
            <Logo className="Logo">FliPER</Logo>
            <Link className="Login" to="/login" style={{textDecoration: 'none'}}>
                <MenuButton text="Login"/>
            </Link>
            <MenuButton className="RandomGame" text="Random Game" />
            <Link className="Upload" to="/upload" style={{textDecoration: 'none'}}>
                <MenuButton text="Upload"/>
            </Link>
            <input type="text" placeholder="Search a project or an user"></input>
            <Link className="Profile" to="/profile" style={{textDecoration: 'none'}}>
                <ProfileIcon/>
            </Link>
        </Header>
    );
}

export default TopBar;