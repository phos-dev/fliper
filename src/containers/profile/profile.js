import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import profile from '../../pics/profile.jpg';
import game from '../../pics/asteroids.jpg';
import Card from '../../components/Card';
import CardList from '../home/CardList';
const mapStateToProps = state => {
    return {
        logged: state.profileController.logged
    }
}
const Page = styled.div`
    display: flex;
    gap: 10px;
    @media screen and (max-width: 550px) {
        & {
            justify-content: center;
            flex-direction: column;
        }
    }
`;
const ProfilePicture = styled.img`
    border-radius: 50%;
`;
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    text-align: center;
    color: #61DAFB;
    width: 300px;

    @media screen and (max-width: 550px) {
        & {
            margin: 20px auto;
        }
    }
`;
const InfoBox = styled.div`
    display: grid;
    background: rgba(56, 62, 74, 0.3);
    width: 100%;
    border-radius: 10px;
    min-height: 200px;
    justify-content: center;
    align-items:center;
    padding-left: 10px;
`;
const InfoTemplate = ({className, element, show, link}) => {
    return (
        <div className={className}>
            <div>{element}: </div>
            {
                link
                ?
                <div className='value'><a href={link}>{show}</a></div>
                :
                <div className='value'>{show}</div>
            }
        </div>
    );
}
const Info = styled(InfoTemplate)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: #61DAFB;
    font-size: 0.6rem;
    font-family: 'Press Start 2P', cursive;

    & .value {
        font-size: 0.6rem;
        font-family: 'Press Start 2P';
        color: white;
    }

    & a {
        text-decoration: none;
        color: white;
    }
     
    & a:hover {
        color: blue;
    }
`;

const GameBar = styled.div`
    display: flex;
    align-items: center;
    background-color: grey;
    border-radius: 10px;
    justify-content: space-between;
    padding: 0px 10px;
    width: 100%
    & h2 {
        width: 300px;
    }
`;

class Profile extends Component {
    render() {
        const {logged} = this.props;
        if(logged === true) {
            return(
                <div style={{display: 'flex'}}>
                    <h1>LOGADO</h1>
                    <h1>LOGADssO</h1>
                </div>
            );
        }
        else {
            return (
                <Page>
                    <ProfileInfo>
                        <ProfilePicture src={profile} width='200px' height='auto'/>
                        <h2>Anya Kovarova</h2>
                        <h3>Info</h3>
                        <InfoBox>
                            <Info element='Online' show='12h atrás'/>
                            <Info element='Projects' show='0'/>
                            <Info element='Upvotes' show='0'/>
                            <Info element='Github' show='anya-git' link="https://www.google.com"/>
                            <Info element='Facebook' show='Anya Kovarova' link="https://google.com"/>
                        </InfoBox>
                    </ProfileInfo>
                    <div  style={{display: 'grid', gridTemplateRows: '0fr auto',gap: '10px', width: '100%', padding: '10px 10px'}}>
                        <GameBar>
                            <h2>Projects List</h2>
                            <input type="text" style={{justifySelf: 'flex-end'}} placeholder="Search a project"></input>
                        </GameBar>
                        <CardList>
                            <Card gamename='Asteroids'/>
                            <Card gamename='sa'/>
                        </CardList>
                    </div>
                </Page>
            );
        }
    }
}
export default connect(mapStateToProps, null)(Profile);