import React from 'react';
import Card from '../components/Card'
import './CardList.css'


const CardList = ({games}) => {
    const cardComponent = games.map((game, i) => {
        return <Card key={i} id={i} gamename={games[i].gamename}/>;
    })
    return (
        <div className="back">
            <div className="Title">GAMES</div>
            <div className="CardList">
                {cardComponent}
            </div>
        </div>
    );
}

export default CardList;