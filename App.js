import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import GnomsNavigator from './navigation/GnomsNavigation';


export default function App() {

  return (
    <GnomsNavigator/>
    // <View style={styles.container}>
    //   {/* <StartScreen/> */}
    //   {/* <SearchScreen/> */}
    //   <GnomScreen/>
    //   {/* <GalleryScreen/> */}
    // </View>
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
