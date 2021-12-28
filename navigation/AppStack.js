import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screen/StartScreen";

import AddGnomeScreen from "../screen/AddGnomeScreen";
import GnomScreen from "../screen/GnomScreen";
import SearchScreen from "../screen/SearchScreen";
import GalleryScreen from "../screen/GalleryScreen";
import NawigateScreen from "../screen/NawigateScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "rgba(80,160,255,0.9)" },
      }}
    >
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Szukaj" }}
      />
      <Stack.Screen
        name="Gallery"
        component={GalleryScreen}
        options={{
          title: "Galeria Krasnali",
        }}
      />
      <Stack.Screen
        name="Gnom"
        component={GnomScreen}
        options={{ title: "Krasnal" }}
      />
      <Stack.Screen name="Nawiguj" component={NawigateScreen} />
      <Stack.Screen
        name="AddGnome"
        component={AddGnomeScreen}
        options={{ title: "Dodaj Krasnala" }}
      />
    </Stack.Navigator>
  );
};
