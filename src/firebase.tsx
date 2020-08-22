
import firebase from 'firebase';
import config from "./config";

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

firebase.initializeApp(firebaseConfig);

export default firebase;