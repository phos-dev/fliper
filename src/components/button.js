import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
    display: flex;
    opacity: 1;
    transition: opacity .15s ease-in;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    border: none;
    font-weight: bold;
    color: ${props => props.theme.color};
    padding: ${props => props.theme.padding};


    &:hover, &:focus {
        cursor: pointer;
        opacity: .5;
        transition: opacity .15s ease-in;
    }

    &:active {
        opacity: .8; transition: opacity .15s ease-out;
    }

    & img {
        width: auto;
        height: 15px;
        margin: 10px 0px;
    }
` 
const VL = styled.div`
    height: 13px;
    border-left: 1px solid white;
    margin-left: 10px;
    margin-right: 10px;
`
const SignInTheme = {
    color: "white",
    padding: "15px 30px"
};

const theme = {
    color: "black",
    padding: "10px 0px"
};

const Button = ({color, logo, text, type, onClick, className}) => {
    return (
        <Btn theme={(type === 'SignIn') ? SignInTheme : theme} onClick={onClick} style={{backgroundColor: `${color}`}}>
            <img src={logo}/>
            {
                (type === 'SignIn') && <VL/>
            }
            {text}
        </Btn>
    );
}

export default Button;