import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartScreen from "../screen/StartScreen";

import GnomScreen from "../screen/GnomScreen";
import SearchScreen from "../screen/SearchScreen";
import GalleryScreen from "../screen/GalleryScreen";
import NawigateScreen from "../screen/NawigateScreen";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Gallery" component={GalleryScreen} />
      <Stack.Screen name="Gnom" component={GnomScreen} />
      <Stack.Screen name="Nawiguj" component={NawigateScreen} />
    </Stack.Navigator>
  );
};
