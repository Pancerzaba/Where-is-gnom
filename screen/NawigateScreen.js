import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import { useDocument } from "../hooks/useDocument";
import { GOOGLE_MAPS_APIKEY } from "react-native-dotenv";

const NawigateScreen = ({ route }) => {
  const { gnomId } = route.params;

  const { document, error } = useDocument("gnomes", gnomId);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  };

  useEffect(() => {
    getLocation();
  }, []);

  console.log(location);

  return (
    <View>
      {document && location && (
        <MapView
          showsUserLocation
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{
              latitude: document.lat,
              longitude: document.lng,
            }}
            pinColor="red"
            title={document.title}
            description={document.adress}
          />

          <MapViewDirections
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            destination={{ latitude: document.lat, longitude: document.lng }}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={2}
            strokeColor="red"
            lineDashPattern={[1]}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default NawigateScreen;
