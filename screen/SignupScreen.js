import React from "react";
import { StyleSheet, Text, TextInput, View, Alert } from "react-native";
import MainButton from "../components/MainButtons";
import { useSignup } from "../hooks/useSignup";

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");

  const handleSignup = () => {
    password.length == 6 &&
    displayName.length >= 4 &&
    mail
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
      ? signup(mail, password, displayName)
      : showAlert();
  };

  const showAlert = () =>
    Alert.alert("Błąd rejestracji", "Nieprawidłowe dane!");

  const { signup, isPending, error } = useSignup();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Zarejestruj sie</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMail(text)}
          value={mail}
          textContentType="emailAddress"
          placeholder="E-mail"
        />
        {!mail
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ) && <Text style={styles.errorText}>Nieprawidłowy mail!</Text>}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Hasło musi mieć długość 6 znaków"
        />
        {password.length != 6 && (
          <Text style={styles.errorText}>Hasło musi mieć 6 znaków!</Text>
        )}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDisplayName(text)}
          value={displayName}
          placeholder="Nick"
        />
        {displayName.length < 4 && (
          <Text style={styles.errorText}>
            Nick musi mieć conajmniej 4 znaki!
          </Text>
        )}
        <MainButton onPress={handleSignup}>Zarejestruj</MainButton>
      </View>
      <View style={styles.haveAccount}>
        <Text>Masz już konto? Zaloguj się!</Text>
        <MainButton
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          Zaloguj
        </MainButton>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
    height: "80%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  input: {
    width: "100%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  haveAccount: {
    marginVertical: 10,
  },
});
