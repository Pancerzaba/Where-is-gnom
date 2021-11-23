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

const LoginScreen = (props) => {
  let ButtonComponent = TouchableOpacity;
  const [valueMail, onChangeMail] = React.useState("mail");
  const [valuePassword, onChangePassword] = React.useState("hasło");
  return (
    <View>
      <Text>Zaloguj sie cipo</Text>
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
      <MainButton
        onPress={() => {
          props.navigation.navigate({ routeName: "Start" });
        }}
      >
        Zaloguj
      </MainButton>
      <MainButton
        onPress={() => {
          props.navigation.navigate({ routeName: "Start" });
        }}
      >
        Zarejestruj
      </MainButton>
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
const styles = StyleSheet.create({});
