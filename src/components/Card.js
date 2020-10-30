import React, {Component} from 'react';
import styled from 'styled-components';

const CardComponent = styled.div`
    display: flex;
    flex-direction: column;
    transition: transform .2s;
    height: 250px;
    width: 200px;
    background-color: #7E889F;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    
    & h1 {
        overflow-wrap: break-word;
        max-width: 90%;
        justify-content: center;
        padding: 0.5rem 1rem 0.5rem 1rem;
        font-size: 14px;
        font-family: 'Press Start 2P', cursive;
        line-height: 17px;
    }
    & img {
        border-radius: 10px;
    }
    &:hover {
        cursor: pointer;
        transform: scale(1.15);
    }
`;

const NotFoundImg = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 250px;
    width: 200px;
    font-family: 'Press Start 2P';
    color: rgb(51, 51, 51);
    background-color: gray;

    &:before {
        content: 'NONE';
        color: white;
    }
`;

class Card extends Component {

    constructor () {
        super();
        this.state = {
            hasError: false,
            photo: ''
        };
    }

    componentWillMount() {
        try {
            const t = require(`../pics/${this.props.gamename.toLowerCase()}.jpg`);
            this.setState({photo: t});
        } catch (error) {
            this.setState({hasError : true});
        }
    }
    render () {
        const {gamename} = this.props;
        const {hasError} = this.state;
        return (
            <CardComponent>
                {
                    (hasError === true) 
                    ? 
                        <NotFoundImg />
                    :
                    <img src={this.state.photo} alt={gamename.toLowerCase()}/>
                }
                <h1>{gamename.toUpperCase()}</h1>
            </CardComponent>
        );
        // if(hasError){
           
        // }
        // else {
        //     const photo = require(`../pics/${this.props.gamename.toLowerCase()}.jpg`)
        //     return (
        //         <div className="Card">
        //             <img src={photo} alt={gamename.toLowerCase()}/>
        //             <h1 className="game_name">{gamename.toUpperCase()}</h1>
        //         </div>
        //     );
        // }
    }
}
export default Card;