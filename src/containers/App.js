import React, { Component } from 'react';
import {connect} from 'react-redux';
import Area from './Area';
import CardList from './CardList.js';
import TopBar from './topbar';
import './App.css';
import Login from './Login';

const mapStateToProps = state => {
    return {
        actualPage: state.pageController.actualPage
    }
}

class App extends Component {
    showPG = (actualPage) => {
        switch(actualPage) {
            case 'HOME':
                return <CardList/>
            case 'LOGIN':
                return <Login/>
            default:
                return <Area/>
        }
    }
    render() {
        const {actualPage} = this.props;
        console.log(actualPage);
        return (
            <div>
                <TopBar/>
                {this.showPG(actualPage)}
            </div>
        );
    }
}
export default connect(mapStateToProps, null)(App);