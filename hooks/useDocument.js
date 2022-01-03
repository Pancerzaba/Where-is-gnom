import React from "react";
import { projectFirestore } from "../config/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const useDocument = (collectionName, id) => {
  const [document, setDocument] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const docRef = doc(projectFirestore, collectionName, id);
    // const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("No such document exists");
        }
      },
      (err) => {
        console.log(err.message);
        setError("Failed to get document");
      }
    );

    return () => unsubscribe();
  }, [collectionName, id]);

  return { document, error };
};
