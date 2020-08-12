import React, { Component } from 'react';
import './Menu_Dropdown.css';

class Dropdown extends Component {
    constructor () {
        super()
        this.state = {
            showing : false,
        }
    }
    render() {
        const {text} = this.props;
        if(this.state.showing) {
            /*<div style={{position:"relative"}} className="btn" onClick={() => this.setState({showing : !this.state.showing})}>
                    {text}
            </div>*/
            return (
                <div 
                    onMouseEnter={() => this.setState({showing : true})}
                    onMouseLeave={() => this.setState({showing : false})}
                    className="Dropmenu"
                >
                    <div className="btn" onClick={() => this.setState({showing : !this.state.showing})}>
                        {text}
                    </div>
                    <div className="Menu_d">
                        <ul>
                            <li>Ação</li>
                            <li>Aventura</li>
                            <li>Teste 3</li>
                            <li>Teste 4</li>
                            <li>Teste 5</li>
                            <li>Teste 6</li>
                        </ul>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div className="btn" onClick={() => this.setState({showing : !this.state.showing})}>
                    {text}
                </div>
            );
        }
    }
}

export default Dropdown;