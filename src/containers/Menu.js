import React, {Component} from 'react';
import MenuButton from '../components/Menu_Button.js';
import MenuDropdownButton from '../components/Menu_Dropdown'
import './Menu.css';

class Menu extends Component {
    render() {
        const {changePage} = this.props;
        return (
            <div className='Menu'>
                <MenuButton text="Home"/>
                <MenuDropdownButton text="Games"/>
                <MenuButton text="Register"/>
                <MenuButton text="Upload"/>
                <MenuButton text="Random Game"/>
                <MenuButton text="About"/>
            </div>
        );
    }
}

export default Menu;