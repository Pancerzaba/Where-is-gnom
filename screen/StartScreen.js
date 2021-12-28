import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Image,
  Button,
} from "react-native";
import MyButton from "../components/MainButtons";
import { useLogout } from "../hooks/useLogout";

const StartScreen = (props) => {
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.container}
        source={require("../assets/papaKrasnal.jpg")}
      >
        <View style={styles.overlay}>
          <View style={styles.buttons}>
            <MyButton
              onPress={() => {
                props.navigation.navigate("Search");
              }}
            >
              Znajdz krasnala
            </MyButton>
            <MyButton
              onPress={() => {
                props.navigation.navigate("Gallery");
              }}
            >
              Galeria krasnali
            </MyButton>
            <MyButton
              onPress={() => {
                props.navigation.navigate("AddGnome");
              }}
            >
              Dodaj krasnala
            </MyButton>
            <MyButton onPress={handleLogout}>Wyloguj</MyButton>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
StartScreen.navigationOptions = {
  headerTitle: " ",
  headerStyle: {
    backgroundColor: "#452187",
  },
  headerTintColor: "white",
};
export default StartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    height: "100%",
    backgroundColor: "rgba(10,10,10,0.6)",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  buttons: {
    height: "40%",
    // flexDirection: "column",
    // justifyContent: "space-between",

    // backgroundColor: "rgba(10,10,10,0.6)",
  },
});
