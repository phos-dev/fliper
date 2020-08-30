import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {connect} from 'react-redux';
import Register from './register/register.js';
import CardList from './home/CardList.js';
import TopBar from './topbar';
import './App.css';
import LoginArea from './login/loginArea';
const mapStateToProps = state => {
    return {
        actualPage: state.pageController.actualPage
    }
}

class App extends Component {
    showPage = (actualPage) => {
        switch (actualPage) {
            case 'HOME':
                return <CardList/>
            case 'LOGIN':
                return <LoginArea/>
            default:
                return <CardList/>
        }
    }
    render() {
        const {actualPage} = this.props;
        console.log(actualPage);
        return (
            <BrowserRouter>
                <TopBar/>
                <Switch>
                    <Route path="/" exact={true} component={CardList}/>
                    <Route path="/login" component={LoginArea}/>
                    <Route path="/register" component={Register}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default connect(mapStateToProps, null)(App);
