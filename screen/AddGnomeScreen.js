import React from "react";
import { StyleSheet, Text, Image, TextInput, View } from "react-native";
import MainButton from "../components/MainButtons";

const AddGnome = () => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");
  return (
    <View>
      <View style={styles.form}>
        {/* <Text>Dodaj gnoma</Text> */}
        <MainButton onPress={() => {}}>Dodaj zdjęcie</MainButton>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMail(text)}
          value={mail}
          placeholder="Nazwa"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setDisplayName(text)}
          value={displayName}
          placeholder="Gdzie stoi"
        />
        <TextInput
          style={styles.inputLong}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Opis"
        />
        <MainButton onPress={() => {}}>Dodaj krasnala</MainButton>
      </View>
    </View>
  );
};

export default AddGnome;

const styles = StyleSheet.create({
  form: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // width: "80%",
    // height: "80%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    // backgroundColor: "grey",
  },
  input: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  inputLong: {
    width: "100%",
    height: "30%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});
