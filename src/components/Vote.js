import React from 'react';
import './Vote.css';

const Vote = () => {
    return (
        <div className="vote">
            <img className="upvote" src={require("../pics/upvote.jpg")} alt="upvote"/>
            <div className="votes">234.324.322</div>
            <img className="downvote" src={require("../pics/downvote.jpg")} alt="downvote"/>
        </div>
    );
}
export default Vote;