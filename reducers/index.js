import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions/index'

function decks(state={}, action){
    console.log(action);
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
        case ADD_CARD:
            return {
                ...state,
                [action.payload.title]: {
                    ...action.payload.title,
                    [action.payload.title['questions']]: [...action.payload.title['questions'],{a:'1', b:'2'}]                    

                }

            }
        default:
            return state;
        }
}

export default decks;