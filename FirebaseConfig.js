import * as firebase from 'firebase';
import '@firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyC6JxSj13H5fgTS3lO3KK5iPZcyYc2TBxo",
    authDomain: "phone-app-588a2.firebaseapp.com",
    projectId: "phone-app-588a2",
    storageBucket: "phone-app-588a2.appspot.com",
    messagingSenderId: "527408960029",
    appId: "1:527408960029:web:4f1e8afe8cd1a223842cf4",
    measurementId: "G-5564C55ZW2"
  };

var app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
}else {
  app = firebase.app(); // if already initialized, use that one
}

export const db = app.database();
export const firestore = firebase.firestore(app);
export const auth = app.auth();