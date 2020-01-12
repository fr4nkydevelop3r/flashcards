import { createStackNavigator } from 'react-navigation-stack';
import DeckList from './DeckList';
import Deck from './Deck';
import Deck2 from './Deck2';
import NewCard from './NewCard';
import Quiz from './Quiz';

const screens = {
    DeckList: {
        screen: DeckList
    },
    Deck2: {
      screen: Deck2
    },
    /*Deck: {
        screen: Deck
    },
    NewCard: {
        screen: NewCard
    },
    Quiz: {
      screen: Quiz
    }*/

    
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
