import { createStackNavigator } from 'react-navigation-stack';
import DeckList from './DeckList';

const screens = {
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerShown: false,
    },
  },
};

const StackNavigator = createStackNavigator(screens);

//ESTE ES EWL PROBLEMA
StackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (
    navigation.state.index > 0 &&
    navigation.state.routes[1].routeName === 'Deck'
  ) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default StackNavigator;
