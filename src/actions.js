import {addGame} from './constants'; 

export const newGame = (gameObj) => ({
    type : addGame, 
    payload: gameObj
})