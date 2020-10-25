import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import StartScreen from './screen/StartScreen';
import SearchScreen from './screen/SearchScreen';
import GnomScreen from './screen/GnomScreen';
import GalleryScreen from './screen/GalleryScreen'

export default function App() {

  // let content = <StartScreen onStart ={startHandler}/>;

  // if(SearchScreen)

  // if(userNumber && guessRounds <= 0){
  //   content= <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  // }else if (guessRounds > 0){
  //   content=<GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>;
  // }

  return (
    
    <View style={styles.container}>
      {/* <StartScreen/> */}
      {/* <SearchScreen/> */}
      <GnomScreen/>
      {/* <GalleryScreen/> */}
    </View>
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
