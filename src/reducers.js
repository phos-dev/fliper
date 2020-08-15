import {addGame} from './constants'; 

const initialState = {
    Games : [{gamename: 'teste1'}],
}

export const addToCatalog = (state=initialState, action={}) => {
    switch(action.type) {
        case addGame:
            return Object.assign({}, state, {Games : state.Games.concat([action.payload])});
        default :
            return state;
    }
}