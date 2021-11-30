import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import MainButton from "../components/MainButtons";
import Map from "../components/Map";
import { useCollection } from "../hooks/useCollection";

const SearchScreen = (props) => {
  let ButtonComponent = TouchableOpacity;
  const [value, onChangeText] = React.useState("Szukaj krasnala");
  const { documents, error } = useCollection("gnomes");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />
      </View>

      {/* <View style={styles.buttons}>
                <MainButton>Dzielnice</MainButton>
                <MainButton>Trasy</MainButton>
                <MainButton>Kategorie</MainButton>
            </View> */}

      {documents && <Map navigation={props.navigation} gnoms={documents} />}
    </View>
  );
};
SearchScreen.navigationOptions = {
  headerTitle: " Szukaj krasnala ",
  headerStyle: {
    backgroundColor: "#452187",
  },
  headerTintColor: "white",
};
export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  inputContainer: {
    backgroundColor: "#452187",
    margin: 10,

    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#452187",
    textAlign: "center",
    flexDirection: "row",
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    padding: 10,
    textAlign: "center",
    borderRadius: 10,
  },
  mapContainer: {
    width: "100%",
    height: "80%",
    justifyContent: "flex-end",
    textAlign: "center",
  },
  map: {
    // width: '90%',
    height: "100%",
  },
});
