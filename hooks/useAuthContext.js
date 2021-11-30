import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  console.log(context);

  if (!context) {
    throw Error("useAuthContext must be inside an AuthContextProvider");
  }
  return context;
};
