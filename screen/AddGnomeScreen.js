import React from "react";
import "react-native-get-random-values";
import { StyleSheet, Image, TextInput, View, Alert } from "react-native";
import MainButton from "../components/MainButtons";
import * as Location from "expo-location";
import { useFirestore } from "../hooks/useFirestore";
import * as ImagePicker from "expo-image-picker";
import { projectStorage } from "../config/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

const AddGnome = () => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [adress, setAdress] = React.useState("");
  const [lat, setLat] = React.useState(null);
  const [lng, setLng] = React.useState(null);
  const [location, setLocation] = React.useState(null);
  const [imageURL, setImageURL] = React.useState(null);
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

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const pickerResult = await ImagePicker.launchCameraAsync();

    handleImagePicked(pickerResult);
  };

  const handleImagePicked = async (pickerResult) => {
    try {
      if (!pickerResult.cancelled) {
        const uploadUrl = await uploadImageAsync(pickerResult.uri);
        setImageURL(uploadUrl);
      }
    } catch (err) {
      console.log(err);
      // alert("Upload failed, sorry :(");
    }
  };

  const uploadImageAsync = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    const uploadPath = `gnomes/${uuidv4()}`;

    const fileRef = ref(projectStorage, uploadPath);
    await uploadBytes(fileRef, blob);

    // We're done with the blob, close and release it
    blob.close();

    return await getDownloadURL(fileRef);
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
      imageURL,
    };

    await addDocument(dwarf);

    setTitle("");
    setAdress("");
    setDescription("");
    setImageURL(null);

    if (!response.error) {
      Alert.alert("Dodano nowego krasnala");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        {imageURL && (
          <Image
            source={{ uri: imageURL }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <MainButton onPress={openCamera}>Dodaj zdjęcie</MainButton>
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
