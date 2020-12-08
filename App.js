import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import {applyMiddleware} from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
import GnomScreen from './screen/GnomScreen'
import GnomsNavigator from './navigation/GnomsNavigation';
import User from './database/User'

import database from '@react-native-firebase/database';

const reference = database().ref('/users/123');


export default function App() {
 
  return (
    <User/>
   // <GnomsNavigator/>
    
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
