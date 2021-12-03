import React from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../config/firebase";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isPending, setIsPending] = React.useState(false);
  const { dispatch } = useAuthContext();
  const gnomesId = [];

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // create a user document
      await projectFirestore.collection("users").doc(res.user.uid).set({
        displayName,
        gnomesId,
      });

      // dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  React.useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { signup, error, isPending };
};
