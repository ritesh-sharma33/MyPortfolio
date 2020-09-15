
import * as firebase from 'firebase';
import 'firebase/firebase-app';
import config from "./config";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    databaseURL: config.dbUrl,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.msgSenderId,
    appId: config.appId,
    measurementId: config.measurementId
};

try {
  firebase.initializeApp(firebaseConfig);
} catch(e) {
  console.error("Something went wrong: " + e.stack);
}

var db = firebase.firestore();

export { db };
