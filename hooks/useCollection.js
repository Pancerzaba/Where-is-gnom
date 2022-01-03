import React from "react";
import { projectFirestore } from "../config/firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";

export const useCollection = (collectionName, _query, _orderBy) => {
  const [documents, setDocuments] = React.useState(null);
  const [error, setError] = React.useState(null);

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  const queryRef = React.useRef(_query).current;
  const orderByRef = React.useRef(_orderBy).current;

  React.useEffect(() => {
    let collRef = collection(projectFirestore, collectionName);

    if (queryRef) {
      collRef = query(collRef, where(...queryRef));
    }
    if (orderByRef) {
      collRef = query(collRef, orderBy(...orderByRef));
    }

    const unsubscribe = onSnapshot(
      collRef,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        // update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("could not fetch the data");
      }
    );

    // unsubscribe on unmount
    return () => unsubscribe();
  }, [collectionName, queryRef, orderByRef]);

  return { documents, error };
};
