import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import {applyMiddleware} from 'redux';
import { StyleSheet, Text, View, Button } from 'react-native';
//import MapView from 'react-native-maps'
import GnomScreen from './screen/GnomScreen'
import GnomsNavigator from './navigation/GnomsNavigation';
import {createStore, applyMiddleware, combineReducers}from 'redux';
import { Provider } from 'react-redux'

import gnomsReducer from './store/reducers/gnoms'
import GalleryScreen from './screen/GalleryScreen';

import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './config/firebase'

import thunk from 'redux-thunk'

if(firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const rootReducer =  combineReducers({
  gnoms: gnomsReducer});


const store= createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
 
  return (
    <Provider store={store}>
          <GnomsNavigator/>

    </Provider>


  );
}
/* <View style={styles.container}>
    <MapView style={styles.map} region={{
      latitude: 51.10000000,
      longitude: 17.0333000,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1
    }}>
      <MapView.Marker coordinate={{
           latitude: 51.10000000,
           longitude: 17.0333000,
      }} title={"Wrocław"} description={'Stolica Dolnegośląska'} />

    </MapView>
</View>
    */
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   padding: 10,
  //   height: '100%'

   

  // },
  container: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  }
});
