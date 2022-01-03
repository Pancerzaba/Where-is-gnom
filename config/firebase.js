import { initializeApp } from "firebase/app";
import { getFirestore, Timestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import ENV from "../env";

const firebaseConfig = {
  apiKey: ENV.API_KEY,
  authDomain: ENV.AUTH_DOMAIN,
  databaseURL: ENV.DATABASE_URL,
  projectId: ENV.PROJECT_ID,
  storageBucket: ENV.STORAGE_BUCKET,
  messagingSenderId: ENV.MESSAGING_SENDER_ID,
  appId: ENV.APP_ID,
  measurementId: ENV.MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

const projectFirestore = getFirestore();
const projectAuth = getAuth();
const projectStorage = getStorage();
const timestamp = Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
