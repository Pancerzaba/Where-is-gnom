import React from "react";
import { StyleSheet, Text, Image, TextInput, View, Alert } from "react-native";
import MainButton from "../components/MainButtons";
import * as Location from "expo-location";
import { useFirestore } from "../hooks/useFirestore";

const AddGnome = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [lat, setLat] = React.useState(null);
  const [lng, setLng] = React.useState(null);
  const [imageURL, setImageURL] = React.useState();
  const [location, setLocation] = React.useState(null);

  const { addDocument, response } = useFirestore("gnomes");

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  React.useEffect(() => {
    getLocation();
  }, []);

  React.useEffect(() => {
    location &&
      (setLat(location.coords.latitude), setLng(location.coords.longitude));
  }, [location]);

  const handleAddDwarf = async () => {
    const dwarf = {
      title,
      adress,
      description,
      lat,
      lng,
    };

    await addDocument(dwarf);

    setTitle("");
    setAdress("");
    setDescription("");

    if (!response.error) {
      Alert.alert("Dodano nowego krasnala");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {/* <Text>Dodaj gnoma</Text> */}
        <MainButton onPress={() => {}}>Dodaj zdjęcie</MainButton>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTitle(text)}
          value={title}
          placeholder="Nazwa"
        />

        <TextInput
          style={styles.input}
          onChangeText={(text) => setAdress(text)}
          value={adress}
          placeholder="Gdzie stoi"
        />
        <TextInput
          style={styles.inputLong}
          onChangeText={(text) => setDescription(text)}
          value={description}
          placeholder="Opis"
        />
        <MainButton onPress={handleAddDwarf}>Dodaj krasnala</MainButton>
      </View>
    </View>
  );
};

export default AddGnome;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    width: "100%",
    height: "100%",
  },
  form: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
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
  inputLong: {
    width: "100%",
    height: "30%",
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
});
