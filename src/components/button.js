import React from 'react';
import './button.css';

const Button = ({color, logo, text, type, onClick, className}) => {
    return (
        (type === 'SignIn')
        ?
        (
            <button className={"btn t1 dim" + ' ' + className + ' '} style={{backgroundColor: `${color}`}} onClick={onClick}>
                <img className="logo" src={logo} />
                <div className="vl"></div>
                {text}
            </button>
        )
        :
        (
            <button className={"btn t2 dim" + ' ' + className + ' '} onClick={onClick}>
                {text}
            </button>
        )
    );
}

export default Button;