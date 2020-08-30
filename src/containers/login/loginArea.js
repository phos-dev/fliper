import React, { Component } from 'react';
import GoogleLogo from '../../pics/google_logo.png';
import Button from '../../components/button';
import {Link} from 'react-router-dom';
import './loginArea.css';

class LoginArea extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onSignin = () => {
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'success'){
                console.log("sucess")
            }
        })
    }
    render() {
        return (
            <div className="flex min-vh-75 justify-center items-center">
                <div className="loginArea w-30">
                    <div className="tc b f3 title"> LOGIN</div>
                    <Button color="#666664" logo={GoogleLogo} text="ENTRE COM SEU EMAIL DO GOOGLE" type="SignIn"/>
                    <div className="inputArea">
                        <input type="email" placeholder="Digite seu e-mail" onChange={this.onEmailChange}/>
                        <input type="password" placeholder="Digite sua senha" onChange={this.onPasswordChange}/>
                    </div>
                    <div className="forgotPassword dim">
                        esqueci minha senha
                    </div>
                    <Button color="#e1e1e1" text="ENTRAR" onClick={this.onSignin}/>
                    <div className="Footer">
                        Não tem cadastro? 
                        <Link to="/register" style={{textDecoration: "none", color: "white"}}>
                            <div className="clickable dim">cadastre-se aqui.</div>
                        </Link>
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default LoginArea;