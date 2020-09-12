import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import profile from '../../pics/profile.jpg';
import game from '../../pics/asteroids.jpg';
const mapStateToProps = state => {
    return {
        logged: state.profileController.logged
    }
}
const Page = styled.div`
    display: flex;
    gap: 10px;
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

const Games = styled.div`
    display: flex;
    flex-direction: column;
    background-color: grey;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
`;

const GameCompTemplate = ({className, name, img, description, version, lastUpdate}) => {
    return (
        <div className={className}>
            <img src={img} alt={name} height='300px' width='auto'/>
            <div className='info'>
                <div className='title'>{name}</div>
                <div className='about'>
                    <div className='version'>Version: {version}</div>
                    <div className='updates'>Last Update: {lastUpdate}</div>
                </div>
                <div className='description'>{description}</div>
            </div>
        </div>
    );
}

const GameComp = styled(GameCompTemplate)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    justify-content: start;
    gap: 10px;
    & .info {
        display: grid;
        align-content: start;
    }
    & .title {
        margin-bottom: 10px;
    }
    & .description {
        margin-top: 10px;
        width: 100%;
    }
    & .about {
        font-weight: bold;
    }
    & .version div {
        font-style: italic;
    }
    & img {
        border-radius: 10px
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
                            <input type="text" style={{justifySelf: 'flex-end'}}></input>
                        </GameBar>
                        <Games>
                            <GameComp name="Asteroids" version="1.2.1" lastUpdate="2 months ago" img={game} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in fermentum ante. Duis id nulla varius, rutrum justo et, convallis tortor. Aliquam feugiat tincidunt ex ac ornare. Donec eget velit erat. Pellentesque ultrices urna ex, vitae pharetra nisi auctor vel. Maecenas at magna leo. Pellentesque sed nibh ultricies, imperdiet eros vitae, ultricies mauris. Morbi non nisl sagittis, congue nisl ut, tempor ex. Sed justo leo, elementum et ex at, aliquam egestas libero. In efficitur elementum diam ut consequat. Nam viverra bibendum sapien id volutpat. Ut nisl nulla, euismod et vulputate nec, venenatis at odio. Aliquam gravida velit et velit gravida, posuere gravida nulla ornare. Praesent sit amet tempus libero. Vestibulum et tortor massa. Phasellus ut auctor nisl."/>
                            <GameComp name="Asteroids" img={game} description="Loremsa saos saokdopk askokospk koaskopask kasopkoapk oakspoksdpa ksaodpkadopk a skdo akoak"/>
                            <GameComp name="Asteroids" img={game} description="Loremsa saos saokdopk askokospk koaskopask kasopkoapk oakspoksdpa ksaodpkadopk a skdo akoak"/>
                            <GameComp name="Asteroids" img={game} description="Loremsa saos saokdopk askokospk koaskopask kasopkoapk oakspoksdpa ksaodpkadopk a skdo akoak"/>
                        </Games>
                    </div>
                </Page>
            );
        }
    }
}
export default connect(mapStateToProps, null)(Profile);