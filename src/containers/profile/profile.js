import React, { Component } from 'react';
import {connect} from 'react-redux';
const mapStateToProps = state => {
    return {
        logged: state.profileController.logged
    }
}
class Profile extends Component {
    render() {
        const {logged} = this.props;
        if(logged === true) {
            return(
                <div>
                    <h1>LOGADO</h1>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h1>NAO LOGADO</h1>
                </div>
            );
        }
    }
}
export default connect(mapStateToProps, null)(Profile);