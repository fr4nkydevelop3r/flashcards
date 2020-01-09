import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import DeckList from './DeckList';
import Deck from './Deck';

const screens = {
    DeckList: {
        screen: DeckList
    },
    Deck: {
        screen: Deck
    }
}

const StackNavigator= createStackNavigator(screens);

export default createAppContainer(StackNavigator);
