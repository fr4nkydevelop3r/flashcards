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

StackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
      tabBarVisible = false;
    }
  
    return {
      tabBarVisible,
    };
  };

export default StackNavigator;
