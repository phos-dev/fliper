import React, { Component, useState} from 'react';
//import {usePopper} from 'react-popper';
import Popper from '@material-ui/core/Popper';
import './Menu_Button'

const Dropdown = ({text}) => {
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;


    console.log(open)
    return (
        <div >
            <div aria-describedby={id} 
                onClick={handleClick} 
                className="Button grow"
            >
                <div className="text">{text}</div>
            </div>
            <Popper id={id} open={open} anchorEl={anchorEl}>
                <div className="Menu_dropdown"> 
                    <ul onMouseLeave={handleClick}>
                        <li>Ação</li>
                        <li>Aventura</li>
                        <li>Teste 3</li>
                        <li>Teste 4</li>
                        <li>Teste 5</li>
                        <li>Teste 6</li>
                    </ul>
                </div>
            </Popper>
        </div>
    );
}

export default Dropdown;