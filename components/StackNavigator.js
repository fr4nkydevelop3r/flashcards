import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';
import NewCard from './NewCard';

const screens = {
    DeckList: {
        screen: DeckList
    },
    Deck: {
        screen: Deck
    },
    NewCard: {
        screen: NewCard
    }
    
}

const StackNavigator= createStackNavigator(screens);

export default createAppContainer(StackNavigator);
