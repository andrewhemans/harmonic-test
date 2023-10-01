import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDFWAtMNLsQspgtEvAr5YJFQqcwC-UuIAs",
    authDomain: "harmonic-test-f9cda.firebaseapp.com",
    databaseURL: "https://harmonic-test-f9cda-default-rtdb.firebaseio.com",
    projectId: "harmonic-test-f9cda",
    storageBucket: "harmonic-test-f9cda.appspot.com",
    messagingSenderId: "804075280141",
    appId: "1:804075280141:web:f0235caab9fad552a04244",
    measurementId: "G-E7WZJ9KM9B"
 }

 if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }

    export const auth = firebase.auth();
    export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

    export const firestore = firebase.firestore();
    export const storage = firebase.storage();