import React from 'react';
import ScoreBar from './Score_Bar';
import './Area.css';
const Area = ({gameName}) => {
    const winner = 'PHOS';
    return (
        <div className="backk">
            <div className="gameName">{gameName}</div>
            <div className="gamePlayer"></div>
            <div className="winner">{`The user ${winner} has the most voted '${gameName}' project! Congratulations.`}</div>
            <ScoreBar placing="1" user="Phos"/>
            <ScoreBar placing="2" user="2asdas"/>
            <ScoreBar placing="3" user="Phasdasos"/>
            <ScoreBar placing="4" user="Phoasdass"/>
        </div>
    );
}
export default Area;