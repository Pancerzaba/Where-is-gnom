import React from "react";
import { StyleSheet, Text, Image, View, ScrollView, Alert } from "react-native";
import MainButton from "../components/MainButtons";
import { useDocument } from "../hooks/useDocument";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";
import * as Location from "expo-location";

const GnomScreen = ({ route, navigation }) => {
  const { gnomId } = route.params;
  const { user } = useAuthContext();
  const { document, error } = useDocument("gnomes", gnomId);
  const { document: userDocument, error: userError } = useDocument(
    "users",
    user.uid
  );
  const [userLat, setUserLat] = React.useState(null);
  const [userLng, setUserLng] = React.useState(null);
  const [location, setLocation] = React.useState(null);

  const getDistance = (x1, x2, y1, y2) => {
    console.log(x1, x2, y1, y2);
    let result =
      Math.sqrt(
        Math.pow(x2 - x1, 2) +
          Math.pow(Math.cos((x1 * Math.PI) / 180) * (y2 - y1), 2)
      ) *
      (40075.704 / 360) *
      1000;
    // console.log(result, "jjjjjjjjjjjjjj");
    return result;
  };
  const showAlert = () =>
    Alert.alert(
      "Nie można dodać kasnala do odwiedzonych",
      "Krasnal znajduję się zbyt daleko by go dodać"
    );
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
      (setUserLat(location.coords.latitude),
      setUserLng(location.coords.longitude));
  }, [location]);
  // console.log("lokalizacja", location, "userLat ", userLat);
  const { updateDocument, response } = useFirestore("users");
  // const x1 = 54.366667;
  // const y1 = 18.633333;
  // const x2 = 54.466667;
  // const y2 = 17.016667;
  const handleGnomes = async () => {
    // console.log(
    //   userLng,
    //   document.lng,
    //   userLat,
    //   document.lat,
    //   // document
    //   getDistance(userLng, document.lng, userLat, document.lat)
    // );
    if (getDistance(userLng, document.lng, userLat, document.lat) < 100) {
      await updateDocument(userDocument.id, {
        gnomesId: [...userDocument.gnomesId, gnomId],
      });
    } else {
      showAlert();
      console.log(
        "za daleko",
        getDistance(userLng, document.lng, userLat, document.lat)
      );
    }
  };

  const checkIfGnomExist = () => {
    return userDocument.gnomesId.some((id) => id === gnomId);
  };

  if (!user || !document) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error || userError) {
    return (
      <View>
        <Text>Error</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {document && userDocument && (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: document.imageURL }} />
          </View>

          <View style={styles.textConteiner}>
            <Text style={styles.title}>{document.title}</Text>
            <Text style={styles.adres}>{document.adress} </Text>
            <Text>{document.description}</Text>
            <View style={styles.buttons}>
              <MainButton
                onPress={() => {
                  //sprawdzic czy przekazuje
                  navigation.navigate("Nawiguj", {
                    gnomId: document.id,
                    productTitle: document.title,
                  });
                }}
              >
                Naviguj
              </MainButton>
              {checkIfGnomExist() ? (
                <MainButton founded={true}>Dodany</MainButton>
              ) : (
                <MainButton onPress={showAlert}>Dodaj</MainButton>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

GnomScreen.navigationOptions = {
  headerTitle: "Krasnal ",
  headerStyle: {
    backgroundColor: "#452187",
  },
  headerTintColor: "white",
};
export default GnomScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 400,
    width: 300,
    margin: 10,
  },
  imageContainer: {
    height: 400,
    width: "100%",

    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
  },
  textConteiner: {
    alignItems: "center",
    margin: 10,
    textAlign: "center",
    width: "95%",

    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#452187",
    color: "white",
    padding: 10,
    borderRadius: 2,
    margin: 10,
  },
  adres: {
    fontWeight: "bold",
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    display: "flex",
    //alignItems: 'center',
    margin: 10,
    //  width: '45%'
  },
});
