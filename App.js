import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StartScreen from './screen/StartScreen';
import SearchScreen from './screen/SearchScreen';
import GnomScreen from './screen/GnomScreen'

export default function App() {
  return (
    // <View style={styles.container}>
    //         <StartScreen/>
    //     </View>
    <View style={styles.container}>
      {/* <SearchScreen/> */}
      <GnomScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 10

   

  },
});
