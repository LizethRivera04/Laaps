import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAXxjCzQv7pSP-vVfLbIig2M0SXv_LIutw",
    authDomain: "laaps-e40c2.firebaseapp.com",
    databaseURL: "https://laaps-e40c2.firebaseio.com",
    projectId: "laaps-e40c2",
    storageBucket: "laaps-e40c2.appspot.com",
    messagingSenderId: "916288481029",
    appId: "1:916288481029:web:b2e78ff38233960cb9396c"
  };
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

