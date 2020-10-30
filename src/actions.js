import {ADD_GAME, CHANGE_PAGE, LOGIN, SEARCH} from './constants'; 

export const newGame = (gameObj) => ({
    type : ADD_GAME, 
    payload: gameObj
})
export const searchGame = (name) => ({
    type: SEARCH,
    payload: name
})
export const changePage = (page) => ({
    type : CHANGE_PAGE, 
    payload: page
})

export const login = (response) => ({
    type: LOGIN,
    payload: response
})