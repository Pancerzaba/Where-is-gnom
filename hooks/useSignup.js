import React from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../config/firebase";
import { useAuthContext } from "./useAuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

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
      const res = await createUserWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // create a user document

      const userRef = doc(projectFirestore, "users", res.user.uid);
      await setDoc(userRef, { displayName, gnomesId });

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
