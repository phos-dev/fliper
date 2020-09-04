import {
    ADD_GAME,
    GO_TO_LOGIN_PAGE,
    GO_TO_REGISTER_PAGE,
    GO_TO_HOME_PAGE,
    GO_TO_RANDOM_GAME_PAGE,
    GO_TO_ABOUT_PAGE,
    GO_TO_UPLOAD_PAGE,
    GO_TO_PROFILE_PAGE,
    LOGIN_SUCESS,
    LOGOUT
} from './constants'; 

const initialState = {
    Games : [],
}

export const addToCatalog = (state=initialState, action={}) => {
    switch(action.type) {
        case ADD_GAME:
            return Object.assign({}, state, {Games : state.Games.concat([action.payload])});
        default :
            return state;
    }
}

const initialPageState = {
    actualPage: 'HOME',
}
export const pageController = (state=initialPageState, action={}) => {
    switch(action.payload) {
        case GO_TO_HOME_PAGE:
            return Object.assign({}, state, {actualPage: 'HOME'});
        case GO_TO_LOGIN_PAGE:
            return Object.assign({}, state, {actualPage: 'LOGIN'});
        case GO_TO_REGISTER_PAGE:
            return Object.assign({}, state, {actualPage: 'REGISTER'});
        case GO_TO_RANDOM_GAME_PAGE:
            return Object.assign({}, state, {actualPage: 'RANDOM GAME'});
        case GO_TO_UPLOAD_PAGE:
            return Object.assign({}, state, {actualPage: 'UPLOAD'});
        case GO_TO_ABOUT_PAGE:
            return Object.assign({}, state, {actualPage: 'ABOUT'});
        case GO_TO_PROFILE_PAGE:
            return Object.assign({}, state, {actualPage: 'PROFILE'});
        default:
            return state; 
        
    }
}

const profileState = {
    logged: false
}

export const profileController = (state=profileState, action={}) => {
    console.log(state);
    switch(action.payload) {
        case LOGIN_SUCESS:
            return Object.assign({}, state, {logged: true});
        case LOGOUT:
            return Object.assign({}, state, {logged: false});
        default:
            return state;
    }
}