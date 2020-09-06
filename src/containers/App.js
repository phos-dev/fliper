import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux';
import Register from './register/register.js';
import CardList from './home/CardList.js';
import TopBar from './topbar';
import Profile from './profile/profile';
import './App.css';
import LoginArea from './login/loginArea';
const mapStateToProps = state => {
    return {
        actualPage: state.pageController.actualPage,
        logged: state.profileController.logged
    }
}

class App extends Component {
    showPage = (actualPage) => {
        switch (actualPage) {
            case 'HOME':
                return <Redirect to='/' />
            case 'LOGIN':
                return <Redirect to='/login' />
            case 'PROFILE':
                return <Redirect to='/profile' />
            default:
                return <Redirect to='/' />
        }
    }
    render() {
        const {actualPage, logged} = this.props;
        return (
            <BrowserRouter>
                <TopBar/>
                {this.showPage(actualPage)}
                <Switch>
                    <Route path="/" exact={true} component={CardList}/>
                    <Route path="/login" component={LoginArea}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/profile" component={Profile}/>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default connect(mapStateToProps, null)(App);