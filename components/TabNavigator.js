import React from 'react';
import { Platform, View, StatusBar } from 'react-native';
import { createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import StackNavigator from './StackNavigator';
import NewDeck from './NewDeck';
import NewCard from './NewCard';
import Quiz from './Quiz';
import Deck from './Deck';
import { createStackNavigator } from 'react-navigation-stack';
import  Constants  from 'expo-constants';
import { FontAwesome, Ionicons, AntDesign } from '@expo/vector-icons';



export function StatusBarApp ({backgroundColor, ...props}){
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props} />
      </View>
    )
}

const tabs = {
    DeckList: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarLabel: 'Decks',
            tabBarIcon: ({ tintColor }) =>
            Platform.OS === 'ios' && <AntDesign name="folder1" size={30} color={tintColor} />,
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({ tintColor }) =>
            Platform.OS === 'ios' && <FontAwesome name="plus-square" size={30} color={tintColor} />
        }
    }
 
}

const navigationOptions = {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: Platform.OS === 'ios' ? '#fe346e' : '#fff',
      style: {
        padding: 10,
        height: Platform.OS === 'ios' ? 60 : 'auto',
        fontSize: 18,
        backgroundColor: Platform.OS === 'ios' ? '#fff' : '#fe346e',
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,

      },
      indicatorStyle: { backgroundColor: "#ffbd69" }
    },
  };




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



