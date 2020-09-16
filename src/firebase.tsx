
import * as firebase from 'firebase';
import 'firebase/firebase-app';
import config from "./config";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSG_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(e) {
  console.error("Something went wrong: " + e.stack);
}

var db = firebase.firestore();

export { db };
