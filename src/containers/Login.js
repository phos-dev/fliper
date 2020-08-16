import React from 'react';
import './Login.css'
const Login = () => {
    return (
        <div className="LoginPage">
            <div className="Login_Div">
                <div className="TitleLogin" style={{marginBottom: '150px'}}>Login</div>
                <div className="Email" style={{marginBottom: '20px'}}>
                    <div>Email: </div>
                    <input type="email" id="email" placeholder="Digite seu email"/>
                </div>
                <div className="Pass">
                    <div>Password: </div>
                    <input type="password" id="pass" placeholder="Digite sua senha"/>
                </div>
                <div className="Send">
                    <button type="button">Login</button>
                    <button type="button">Register</button>
                </div>
            </div>
        </div>
    );
}

export default Login;