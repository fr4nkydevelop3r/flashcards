export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD = 'ADD_CARD'

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

export function addCard(payload){
    return{
        type: ADD_CARD,
        payload
    }
}