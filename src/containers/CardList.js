import React, { Component } from 'react';
import Card from '../components/Card';
import {connect} from 'react-redux';
import './CardList.css';
import {newGame} from '../actions';

const mapStateToProps = state => {
    return {
        Games: state.addToCatalog.Games
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onAdd : () => dispatch(newGame({gamename: Math.random().toString()}))
    }
}
class CardList extends Component {
    render() {
        
        const {Games, onAdd} = this.props;
        console.log(Games);
        const cardComponent = Games.map((Game, i) => {
            return <Card key={i} id={i} gamename={Games[i].gamename}/>;
        })
        console.log("render");
        return (
            <div className="back">
                <div className="Title">GAMES</div>
                <div className="CardList">
                    {cardComponent}
                    <button onClick={onAdd}></button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);