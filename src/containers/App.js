import React, { Component } from 'react';
import {connect} from 'react-redux';
import Area from './Area';
import CardList from './CardList.js';
import TopBar from './topbar';
import './App.css';

const mapStateToProps = state => {
    return {
        actualPage: state.pageController.actualPage
    }
}

class App extends Component {
    render() {
        const {actualPage} = this.props;
        console.log(actualPage);
        return (
            <div>
                <TopBar/>
                {
                    (actualPage == 'HOME') 
                    ?
                    <CardList/>
                    :
                    <Area/>
                }
            </div>
        );
    }
}
export default connect(mapStateToProps, null)(App);