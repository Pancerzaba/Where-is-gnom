import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainButton from "../components/MainButtons";
import { useLogin } from "../hooks/useLogin";

const LoginScreen = ({ navigation }) => {
  let ButtonComponent = TouchableOpacity;
  const [valueMail, onChangeMail] = React.useState("mail");
  const [valuePassword, onChangePassword] = React.useState("hasło");

  const handleLogin = () => {
    login(valueMail, valuePassword);
  };

  const { login, isPending, error } = useLogin();
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Zaloguj sie cipo</Text>
        {/* TODO: dodać walidację */}
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeMail(text)}
          value={valueMail}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          value={valuePassword}
        />
        <MainButton onPress={handleLogin}>Zaloguj</MainButton>
      </View>
      <View style={styles.haveAccount}>
        <Text>Nie masz jeszcze konta? Załóż!</Text>
        <MainButton
          onPress={() => {
            navigation.navigate("Signup");
          }}
        >
          Załóż konto
        </MainButton>
      </View>
    </View>
  );
};

export default LoginScreen;
LoginScreen.navigationOptions = {
  headerTitle: "Login ",
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
