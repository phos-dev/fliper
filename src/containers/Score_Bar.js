import React, { Component } from 'react';
import Vote from '../components/Vote'
import './Score_Bar.css'
class Score_Bar extends Component {
    constructor() {
        super();
        
    }
    onMouse
    render() {
        const {placing, user} = this.props;
        return (
            <div className='ScoreContainer'>
                <div className="user">{`${placing}° - ${user}`}</div> 
                <div className="mobile">
                    <img className="android" src={require("../pics/android_logo.png")}/>
                    <img className="apple" src={require("../pics/ios_logo.png")}/>
                </div>
                <Vote/>
            </div>
        );
    }
}
export default Score_Bar;