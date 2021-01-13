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
    //height:' 50%',
    //width: '100%',
    margin: 2,
  alignItems: 'center'
 
  },
  buttonContainer:{
    borderRadius: 5,
    //overflow: 'hidden',
   // margin:5,
    padding: 5,
    //backgroundColor: 'silver',
  alignItems: 'center'
   
  },
  buttonText: {
    display: 'flex',
    margin: 5,
    color: 'white',
 //backgroundColor:'red',
    fontSize: 18,
    textAlign: 'center',
   // marginVertical: 10,
    padding: 2,
    //backgroundColor: 'red'
  }
});

export default MainButton;