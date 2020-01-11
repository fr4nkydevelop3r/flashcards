import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions/index'

function decks(state={}, action){
   /* console.log(state);
    console.log(action.payload); */
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
                    ...state[action.payload.title],
                    ['questions']: [...state[action.payload.title]['questions'], {question:action.payload.question, answer: action.payload.answer}]
                    

                }

            }
        default:
            return state;
        }
}

export default decks;