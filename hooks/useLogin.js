import React from "react";
import { projectAuth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCancelled] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [isPending, setIsPending] = React.useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsPending(true);

    try {
      // login
      const res = await signInWithEmailAndPassword(
        projectAuth,
        email,
        password
      );

      // update online status
      //   const documentRef = projectFirestore
      //     .collection('users')
      //     .doc(res.user.uid);
      //   await documentRef.update({ online: true });

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

  return { login, isPending, error };
};
