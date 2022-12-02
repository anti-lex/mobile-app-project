import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyC6JxSj13H5fgTS3lO3KK5iPZcyYc2TBxo",
    authDomain: "phone-app-588a2.firebaseapp.com",
    projectId: "phone-app-588a2",
    storageBucket: "phone-app-588a2.appspot.com",
    messagingSenderId: "527408960029",
    appId: "1:527408960029:web:4f1e8afe8cd1a223842cf4",
    measurementId: "G-5564C55ZW2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const database = getDatabase(app);