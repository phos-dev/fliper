import React, { Component } from 'react';
import './Menu_Button.css';
import {connect} from 'react-redux';
import {changePage} from '../actions'
const mapDispatchToProps = dispatch => {
    return {
        changePage: (page) => dispatch(changePage(page))
    }
}
class Button extends Component {
    Get_Page() {
        return 'GO_TO_'.concat(this.props.text.toUpperCase().replace(' ', '_'), '_PAGE');
    }
    render() {
        const {changePage, className} = this.props;
        const classes = `${className} Button grow`;
        return (
            <div className={classes} onClick={() => changePage(this.Get_Page())}>
                <div className='text'>{this.props.text}</div>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Button);