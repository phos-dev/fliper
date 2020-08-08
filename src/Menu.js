import React from 'react';
import MenuButton from './Menu_Button.js';
import './Menu.css';

const Menu = () => {
    return (
        <div className='Menu'>
            <MenuButton text="Home"/>
            <MenuButton text="Games"/>
            <MenuButton text="Register"/>
            <MenuButton text="Upload"/>
            <MenuButton text="Random Game"/>
            <MenuButton text="About"/>
        </div>
    );
}

export default Menu;