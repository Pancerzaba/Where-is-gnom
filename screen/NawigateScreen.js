import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Location from "expo-location";

import MapView, { Polyline } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import { useDocument } from "../hooks/useDocument";
import ENV from "../env";

const NawigateScreen = ({ navigation, route }) => {
  const { gnomId } = route.params;

  const { document, error } = useDocument("gnomes", gnomId);

  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log("wokeeey");
  //       console.log(position);
  //       setLatitude(position.coords.latitude);
  //       setLongitude(position.coords.longitude);
  //       setError(null);
  //     },
  //     (err) => setErr(err.message),
  //     { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 }
  //   );
  // }, []);

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
      {/* <Text> {latitude} </Text>
      <Text> {longitude} </Text>
  <Text>{gnome.title}</Text>
  <Text>szer {gnome.lat}</Text>
  <Text>dlu {gnome.lng}</Text> */}

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
            title={document.title}
            description={document.adress}
          />

          {/* <Marker  coordinate={{
         latitude: latitude,
         longitude:  longitude,
         
    }} title={'Tu jestem'}   /> */}

          {/* <Marker
  key={gnom.id}
    coordinate={{ latitude : gnom.lat , longitude : gnom.lng}}
    title={gnom.title}
    description={gnom.adress}
    onPress={(e)=>{
     e.stopPropagation()
     props.navigation.navigate('Gnom',{gnomId: gnom.id})
      }}
  /> */}
          <MapViewDirections
            origin={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            destination={{ latitude: document.lat, longitude: document.lng }}
            apikey={ENV.GOOGLE_MAPS_APIKEY}
            strokeWidth={2}
            strokeColor="red"
            lineDashPattern={[1]}
          />
        </MapView>
      )}
    </View>
  );
};
NawigateScreen.navigationOptions = {
  headerTitle: " Nawiguj do krasnala ",
  headerStyle: {
    backgroundColor: "#452187",
  },
  headerTintColor: "white",
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
