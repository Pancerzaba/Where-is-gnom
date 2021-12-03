import React from "react";
import { StyleSheet, Text, Image, View, ScrollView } from "react-native";
import MainButton from "../components/MainButtons";
import { useDocument } from "../hooks/useDocument";
import { useFirestore } from "../hooks/useFirestore";
import { useAuthContext } from "../hooks/useAuthContext";

const GnomScreen = ({ route, navigation }) => {
  const { gnomId } = route.params;
  const { user } = useAuthContext();

  const { document, error } = useDocument("gnomes", gnomId);
  const { document: userDocument, error: userError } = useDocument(
    "users",
    user.uid
  );
  const { updateDocument, response } = useFirestore("users");

  const handleGnomes = async () => {
    await updateDocument(userDocument.id, {
      gnomesId: [...userDocument.gnomesId, gnomId],
    });
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
                <MainButton onPress={handleGnomes}>Dodaj</MainButton>
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
