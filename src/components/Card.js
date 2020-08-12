import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    constructor (props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentWillMount() {
        try {
            require(`../pics/${this.props.gamename.toLowerCase()}.jpg`)
        } catch (error) {
            this.setState({hasError : true});
        }
    }
    render () {
        const {gamename} = this.props;
        const {hasError} = this.state;
        if(hasError){
            return (
                <div className="Card">
                    <div className="notFound">
                        NONE
                    </div>
                    <h1 className="game_name">{gamename.toUpperCase()}</h1>
                </div>
            );
        }
        else {
            const photo = require(`../pics/${this.props.gamename.toLowerCase()}.jpg`)
            return (
                <div className="Card">
                    <img src={photo} alt={gamename.toLowerCase()}/>
                    <h1 className="game_name">{gamename.toUpperCase()}</h1>
                </div>
            );
        }
    }
}
export default Card;