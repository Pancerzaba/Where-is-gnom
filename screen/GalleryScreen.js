import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";

import GnomItem from "../components/GnomItem";
import { useCollection } from "../hooks/useCollection";

const GalleryScreen = (props) => {
  const { documents, error } = useCollection("gnomes");

  let ButtonComponent = TouchableOpacity;

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <ScrollView style={styles.fotos}>
          {documents &&
            documents.map((item) => (
              <View key={item.id} style={styles.container2}>
                <ButtonComponent
                  keyExtractor={item.id}
                  onPress={() => {
                    props.navigation.navigate("Gnom", {
                      gnomId: item.id,
                      productTitle: item.title,
                    });
                  }}
                >
                  <GnomItem
                    key={item.id}
                    style={styles.item}
                    image={item.imageURL}
                    title={item.title}
                  />
                </ButtonComponent>
              </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    flexWrap: "nowrap",
    alignItems: "center",
  },
  container2: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    padding: "10px",
    margin: 10,
  },
  item: { display: "flex", flex: 1 },

  fotos: {
    display: "flex",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});
