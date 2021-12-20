import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import MainButton from "../components/MainButtons";
import { useSignup } from "../hooks/useSignup";

const LoginScreen = ({ navigation }) => {
  const [mail, setMail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [displayName, setDisplayName] = React.useState("");

  const handleSignup = () => {
    signup(mail, password, displayName);
  };

  const { signup, isPending, error } = useSignup();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Zarejestruj sie</Text>
        {/* TODO: dodać walidację; haslo musi miec 6 znaków */}
        <TextInput
          style={styles.input}
          onChangeText={(text) => setMail(text)}
          value={mail}
          placeholder="E-mail"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
          placeholder="Hasło (musi mieć długość 6 znaków)"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDisplayName(text)}
          value={displayName}
          placeholder="Nick"
        />
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
LoginScreen.navigationOptions = {
  headerTitle: "Signup ",
  headerStyle: {
    backgroundColor: "#452187",
  },
  headerTintColor: "white",
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
    height: "80%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "grey",
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
