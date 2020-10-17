import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';


const MainButton = props => {
  let ButtonComponent =TouchableOpacity;

  if(Platform.OS === 'android' && Platform.Version>=21){
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
    <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </ButtonComponent></View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#452187',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  buttonContainer:{
    borderRadius: 21,
    overflow: 'hidden'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center'
  }
});

export default MainButton;