import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBuUU2Cn6Ocj4iO8bQ_qGfgHTIgQO_vYJM",
    authDomain: "clone-project-7801d.firebaseapp.com",
    projectId: "clone-project-7801d",
    storageBucket: "clone-project-7801d.appspot.com",
    messagingSenderId: "508859085090",
    appId: "1:508859085090:web:b40e395269d03d8283757b",
    measurementId: "G-WW4BLZ8PFT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };