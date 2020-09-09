import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import profile from '../../pics/profile.jpg';
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
    display: grid;
    justify-items: center;
    margin: 20px;

`;
const InfoBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: rgba(56, 62, 74, 0.3);
    width: 100%;
    border-radius: 10px;
    min-height: 200px;
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
                        <h2>Teste Name</h2>
                        <InfoBox>
                        </InfoBox>
                    </ProfileInfo>
                    <h1>LOGADssO</h1>
                </Page>
            );
        }
    }
}
export default connect(mapStateToProps, null)(Profile);