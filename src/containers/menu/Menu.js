import React, {Component} from 'react';
import MenuButton from '../../components/Menu_Button.js';
import MenuDropdownButton from '../../components/Menu_Dropdown'
import './Menu.css';
import {Link} from 'react-router-dom';
class Menu extends Component {
    render() {
        const {changePage} = this.props;
        return (
                <div className='Menu'>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <MenuButton text="Home"/>
                    </Link>
                    <MenuDropdownButton text="Games"/>
                    <Link to="/login" style={{ textDecoration: 'none'}}>
                        <MenuButton text="Login"/>
                    </Link>
                    <MenuButton text="Random Game"/>
                    <Link to="/upload" style={{ textDecoration: 'none' }}>
                        <MenuButton text="Upload"/>
                    </Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <MenuButton text="About"/>
                    </Link>
                </div>
            
        );
    }
}
export default Menu;