import ENV from '../env'

const firebaseConfig = {
    apiKey: ENV.API_KEY,
   authDomain: ENV.AUTH_DOMAIN,
    databaseURL: ENV.DATABASE_URL,
    projectId: ENV. PROJECT_ID,
    storageBucket: ENV.STORAGE_BUCKET,
    messagingSenderId: ENV.MESSAGING_SENDER_ID,
    appId: ENV.APP_ID,
    measurementId: ENV.MEASUREMENT_ID
  };

  export default firebaseConfig