import { GET_DECKS, ADD_DECK } from '../actions/index'

function decks(state={}, action){
   // console.log(action);
    switch(action.type){
        case GET_DECKS:
            return {
                ...state,
            }
        case ADD_DECK:
            return {
                ...state,
                ...action.deck

            }
        default:
            return state;
        }
}

export default decks;