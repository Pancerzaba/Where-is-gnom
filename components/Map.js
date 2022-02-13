import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Callout } from "react-native-maps";

import { Marker } from "react-native-maps";

const Map = ({ gnoms, navigation }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: 51.109,
          longitude: 17.0333,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {gnoms.map((gnom) => (
          <Marker
            key={gnom.id}
            coordinate={{ latitude: gnom.lat, longitude: gnom.lng }}
          >
            <Callout
              onPress={(e) => {
                e.stopPropagation();
                navigation.navigate("Gnom", { gnomId: gnom.id });
              }}
            >
              <View>
                <Text>{gnom.title}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default Map;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
