import React, { Component } from 'react';
import Card from '../../components/Card';
import {connect} from 'react-redux';
import './CardList.css';

const mapStateToProps = state => {
    return {
        Games: state.catalogController.Games
    }
}

class CardList extends Component {
    render() {
        
        const {Games} = this.props;
        const cardComponent = Games.map((Game, i) => {
            return <Card key={i} id={i} gamename={Games[i].name}/>;
        })
        return (
            <div className="back">
                <div className="CardList">
                    {cardComponent}
                    <button>Clique aqui para adcionar algo!</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, null)(CardList);