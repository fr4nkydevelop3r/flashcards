export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK'

export function getDecks(){
    return{
        type: GET_DECKS
    }
}   

export function addDeck(deck){
    return{
        type: ADD_DECK,
        deck
    }
}
