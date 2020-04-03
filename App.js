import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, Button } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants'
import DeckScreen from './components/DeckScreen'
import AddDeck from './components/AddDeck'
import TabsScreen from './components/TabsScreen'
import MainNavigator from './components/MainNavigator'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'


const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

export default function App() {
  return (
    <Provider store={createStore(reducer,applyMiddleware(logger))}>
      <MainNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#FF00FF",
    height: Constants.statusBarHeight,
  },

});