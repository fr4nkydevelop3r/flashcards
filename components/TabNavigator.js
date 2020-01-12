import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import StackNavigator from './StackNavigator';
import NewDeck from './NewDeck';
import NewCard from './NewCard';
import Quiz from './Quiz';
import Deck from './Deck';
import { createStackNavigator } from 'react-navigation-stack';



const tabs = {
    DeckList: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarLabel: 'Decks'
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck'
        }
    }
 
}

const navigationOptions = {
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? '#cc0066' : '#42e6a4',
        style: {
            padding: 10,
            fontSize: 18
        }
    }
}



const TabNavigator = 
Platform.OS === 'ios'
    ? createBottomTabNavigator(tabs,navigationOptions)
    : createMaterialTopTabNavigator(tabs, navigationOptions)


    const HomeStack = createStackNavigator({
        Decks: {
            screen: TabNavigator,
            navigationOptions: {
                headerShown: false,
              },
        },
        Deck: {
            screen: Deck,
        },
        NewCard: NewCard,
        Quiz: Quiz
    
      });


export default createAppContainer(HomeStack);



