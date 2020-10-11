import React, { Component } from 'react';
import GoogleLogo from '../../pics/google_logo.png';
import Button from '../../components/button';
import './register.css';
import { Link } from 'react-router-dom';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            user: '',
            email: '',
            password: ''
        }
    }
    onValueChange = (parameter) => event => {
        this.setState({[parameter]: event.target.value});
    }
    onSignin = () => {
        fetch('https://fliperapi.herokuapp.com/register', {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.user,
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data === 'Registred'){
                console.log('Registered');

            }
        })
    }
    render() {
        return (
            <div className="flex min-vh-75 justify-center items-center">
                <div className="loginArea w-30">
                    <div className="tc b f3 title"> REGISTER</div>
                    <div className="inputArea">
                        <input type="text" placeholder="Digite o nome que deseja ser chamado" onChange={this.onValueChange("name")}/>
                        <input type="text" placeholder="Digite um nome de usúario" onChange={this.onValueChange("user")}/>
                        <input type="email" placeholder="Digite seu e-mail" onChange={this.onValueChange("email")}/>
                        <input type="password" placeholder="Digite sua senha" onChange={this.onValueChange("password")}/>
                    </div>
                    <Button className="mt4" color="#e1e1e1" text="REGISTRAR" onClick={this.onSignin}/>
                    <div className="Footer">
                        Tem cadastro? 
                        <Link to="/login" style={{textDecoration: "none", color: "white"}}>
                            <div className="clickable dim">faça o login aqui.</div>
                        </Link>
                    </div>
                </div>
            </div>
            
        );
    }
    
}

export default Register;