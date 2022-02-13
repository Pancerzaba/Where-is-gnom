import React from "react";
import { StyleSheet, View } from "react-native";

import Map from "../components/Map";
import { useCollection } from "../hooks/useCollection";

const SearchScreen = (props) => {
  const { documents, error } = useCollection("gnomes");

  return (
    <View style={styles.container}>
      {documents && <Map navigation={props.navigation} gnoms={documents} />}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },

  map: {
    height: "100%",
  },
});
