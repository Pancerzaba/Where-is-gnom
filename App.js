import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import {applyMiddleware} from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import GnomScreen from './screen/GnomScreen'
import GnomsNavigator from './navigation/GnomsNavigation';
//import User from './database/User'
import {createStore, combineReducers}from 'redux';
import { Provider } from 'react-redux'

import database from '@react-native-firebase/database';

import gnomsReducer from './store/reducers/gnoms'
import GalleryScreen from './screen/GalleryScreen';

//const reference = database().ref('/users/123');
const rootReducer =  combineReducers({
  gnoms: gnomsReducer});


const store= createStore(rootReducer);

export default function App() {
 
  return (
  //  <User/>
  <Provider store={store}>
    {/* <GalleryScreen/> */}
    <GnomsNavigator/>
    
  </Provider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    height: '100%'

   

  },
});
