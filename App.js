import React from 'react';
import { StyleSheet, View } from 'react-native';
import TabNavigator from './components/TabNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { setLocalNotification } from './utils/helpers';
import { StatusBarApp } from './components/TabNavigator';
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <StatusBarApp backgroundColor="#fe346e" barStyle="light-content" />

          <TabNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
