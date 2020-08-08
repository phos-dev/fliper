import React from 'react';
import './Card.css';
const Card = ({gamename}) => {
    let photo;
    try {
        photo = require(`./pics/${gamename.toLowerCase()}.jpg`)
    }
    catch(error){
        photo = undefined;
    }
    return (
        <div className="Card">
            <img src={photo} alt={gamename.toLowerCase()}/>
            <h1 className="game_name">{gamename.toUpperCase()}</h1>
        </div>
    );
}
export default Card;