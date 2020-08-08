import React from 'react';
import Card from './Card'
import './CardList.css'
const CardList = () => {
    return (
        <div className="back">
            <div className="Title">GAMES</div>
            <div className="CardList">
                <Card gamename="asteroids"/>
                <Card gamename="space invaders"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
                <Card gamename="none"/>
            </div>
        </div>
        
    );
}

export default CardList;