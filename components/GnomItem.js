import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const GnomItem = (props) => {
  return (
    <View style={styles.gnom}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

export default GnomItem;

const styles = StyleSheet.create({
  gnom: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 8,
    borderRadius: 10,
    backgroundColor: "white",
    height: 300,
    width: 300,
    margin: 20,
  },
  imageContainer: {
    width: "100%",
    height: "80%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    alignItems: "center",
    height: "20%",
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
});
