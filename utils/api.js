import { AsyncStorage } from 'react-native';
const DECKS_STORAGE_KEY = 'Decks';

export function getDecks(){
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(decks => decks)
}

export function createDeck(deck){
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));

}


