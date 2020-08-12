import React from 'react';
import './Menu_Button.css';

const Button = ({text}) => {
    return (
        <div className='Button' >
            <div className='text'>{text}</div>
        </div>
    );
}

export default Button;