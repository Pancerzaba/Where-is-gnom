import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import MainButton from "../components/MainButtons";
import { fetchGnomes } from "../store/actions/Gnom";

import GnomItem from "../components/GnomItem";
import { useCollection } from "../hooks/useCollection";

const GalleryScreen = (props) => {
  const { documents, error } = useCollection("gnomes");

  let ButtonComponent = TouchableOpacity;

  return (
    <View style={styles.container}>
      {/* <View style={styles.buttons}>
                <MainButton>Wszystkie</MainButton>
                <MainButton>Zebrane</MainButton>
                <MainButton>Nie Zebrane</MainButton>
            </View> */}
      <View style={styles.fotos}>
        <ScrollView style={styles.fotos}>
          {documents &&
            documents.map((item) => (
              <>
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
                    style={styles.item}
                    image={item.imageURL}
                    title={item.title}
                  />
                </ButtonComponent>
              </>
            ))}
        </ScrollView>
      </View>
      {/* <View style={styles.fotos}>
        {documents && (
          <FlatList
            data={documents}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <ButtonComponent
                onPress={() => {
                  props.navigation.navigate("Gnom", {
                    gnomId: itemData.item.id,
                    productTitle: itemData.item.title,
                  });
                }}
              >
                <GnomItem
                  image={itemData.item.imageURL}
                  title={itemData.item.title}
                />
              </ButtonComponent>
            )}
          />
        )}
      </View> */}
    </View>
  );
};
GalleryScreen.navigationOptions = {
  headerTitle: "Gallery ",
  headerStyle: {
    backgroundColor: "#452187",
  },
  headerTintColor: "white",
};
export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",

    justifyContent: "space-evenly",
    flexWrap: "wrap",
    //backgroundColor:'green',
    alignItems: "center",
    backgroundColor: "rgba(0,0,120,0.2)",
    // alignItems: 'center'
  },

  title: {
    fontSize: 20,
    //fontWeight: 'bold',
    textAlign: "center",
    // backgroundColor: "#452187",
    color: "white",
    padding: "10px",
    //borderRadius: 25,
    margin: 10,
  },
  item: { display: "flex", flex: 1 },
  buttons: {
    //display: "flex",
    // alignItems: 'center',
    // backgroundColor: 'red',
    alignItems: "center",
    flexDirection: "row",
    width: 320,
    height: 100,
    margin: 10,
  },
  foto: {
    // width: "100%",
    display: "flex",
    margin: 10,
    flex: 1,
  },
  fotos: {
    display: "flex",
    flex: 1,
    width: "100%",
    // alignItems: "center",
    // backgroundColor: "red",
    flexDirection: "column",
    flexWrap: "wrap",
  },
});
