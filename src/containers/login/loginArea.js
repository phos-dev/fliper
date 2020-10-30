import React, { Component } from 'react';
import {connect} from 'react-redux';
import GoogleLogo from '../../pics/google_logo.png';
import Button from '../../components/button';
import {Link} from 'react-router-dom';
import './loginArea.css';
import { login, changePage } from '../../actions';
import styled from 'styled-components';
const mapDispatchToProps = dispatch => {
    return {
        login: (response) => dispatch(login(response)),
        changePage: (page) => dispatch(changePage(page))
    }
}
const mapStateToProps = state => {
    return {
        logged: state.profileController.logged
    }
}

class LoginArea extends Component {
    constructor(){
        super();
        this.state = {
            login: '',
            password: ''
        }
    }
    onLoginChange = (event) => {
        this.setState({login: event.target.value});
    }
    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onSignin = () => {
        console.log(this.state);
        fetch('http://fliperapi.herokuapp.com/login', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data === 'LOGIN_SUCCESS') {    
                const {login, changePage} = this.props;
                login('LOGIN_SUCCESS');
                changePage('GO_TO_PROFILE_PAGE');
            }
        })
    }
    onGoogle = () => {
        window.location.href = 'https://fliperapi.herokuapp.com/auth/google';
    }
    render() {
        return (
            <div className="loginArea">
                <div className="tc b f3 title"> LOGIN</div>
                <Button color="#666664" logo={GoogleLogo} text="ENTRE COM SEU EMAIL DO GOOGLE" type="SignIn" onClick={this.onGoogle}/>
                <div className="inputArea">
                    <input type="text" placeholder="Digite seu e-mail ou o nome de usuário" onChange={this.onLoginChange}/>
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
        );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginArea);