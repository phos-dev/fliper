import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import ProfileIcon from '../components/profile/profile_button';
import MenuButton from '../components/Menu_Button.js';
import {searchGame, newGame} from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        toSearch: state.catalogController.toSearch
    }
}
const mapDispatchToProps = dispatch => {
    return {
        searchGame : event => dispatch(searchGame(event)),
        onSearch : data => dispatch(newGame(data))
    }
}
/*

    padding: '5px 10px 5px 10px';
        justify-content: right; */
const Header = styled.div`
    display: grid;
    background: rgba(56, 62, 74, 0.3);
    justify-content: center;
    align-items: center;
    width: 100%;
    grid-template-columns: 1fr auto auto auto 1fr;
    & div, a {
        display: grid;
        justify-self: center;
    }
    & .Logo {
        justify-self: left;
        margin-left: 20px;
    }
    & input {
        border-radius: 10px;
        border: 1px solid silver;
        text-align: center;
        padding: 5px;
        flex-grow: 1;
    }
    .searchProfileDiv {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        width: 100%;
    }
    @media screen and (max-width: 968px) {
        & {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr;
            justify-items: center;
        }
        .Logo {
            justify-self: center;
            margin-left: 0px;
            grid-column: span 3;
        }
        .searchProfileDiv {
            grid-column: span 3;
            grid-template-columns: auto auto;
            justify-content: center;
        }
        & input {
            width: 300px;
        }
    }
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    color: #61dafb;
    font-size: 2rem;
    font-family: 'Press Start 2P', cursive;
`;
class TopBar extends Component {

    onSearchBarChange = (event) => {
        this.props.searchGame({toSearch: event.target.value});
        fetch("http://localhost:3001/search", 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'user-key': 'd0205a3f20063d4b4779d67d81a09875'
            },
            body: JSON.stringify({ 
                name: event.target.value
            })
        })
        .then(response => response.json())
        .then(data => {
            const {onSearch} = this.props;
            console.log('Search:', this.props.toSearch, 'Received:', data);
            onSearch(data);
        })
    }
    render() {
        return (
            <Header>
                <Logo className="Logo">FliPER</Logo>
                <Link className="Login" to="/login" style={{textDecoration: 'none'}}>
                    <MenuButton text="Login"/>
                </Link>
                <MenuButton className="RandomGame" text="Random Game" />
                <Link className="Upload" to="/upload" style={{textDecoration: 'none'}}>
                    <MenuButton text="Upload"/>
                </Link>
                <div className="searchProfileDiv">
                    <input type="text" placeholder="Search a project or an user" onChange={this.onSearchBarChange}></input>
                    <Link className="Profile" to="/profile" style={{textDecoration: 'none'}}>
                        <ProfileIcon/>
                    </Link>
                </div>
            </Header>
        );
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);