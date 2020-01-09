import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import TabNavigator from './components/TabNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        <TabNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
