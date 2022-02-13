import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={props.founded ? styles.founded : styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(80,160,255,0.9)",
    margin: 3,
    alignItems: "center",
  },
  founded: {
    backgroundColor: "rgba(0,0,0,0.4)",
    margin: 3,
    alignItems: "center",
  },
  buttonContainer: {
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  buttonText: {
    display: "flex",
    margin: 5,
    color: "white",
    fontSize: 20,
    textAlign: "center",
    padding: 5,
  },
});

export default MainButton;
