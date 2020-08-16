import {ADD_GAME, CHANGE_PAGE} from './constants'; 

export const newGame = (gameObj) => ({
    type : ADD_GAME, 
    payload: gameObj
})

export const changePage = (page) => ({
    type : CHANGE_PAGE, 
    payload: page
})