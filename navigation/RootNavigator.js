import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from "./AuthStack";
import { AppStack } from "./AppStack";
import { useAuthContext } from "../hooks/useAuthContext";

export const RootNavigator = () => {
  const { user, authIsReady } = useAuthContext();

  //   if (isLoading) {
  //     return <LoadingIndicator />;
  //   }

  return (
    <>
      {authIsReady && (
        <NavigationContainer>
          {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      )}
    </>
  );
};
