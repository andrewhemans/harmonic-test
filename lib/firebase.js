import firebase from '@firebase/app';
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
 
 // Auth exports
 export const auth = firebase.auth();
 export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
 
 // Firestore exports
 export const firestore = firebase.firestore();
 export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
 export const fromMillis = firebase.firestore.Timestamp.fromMillis;
 export const increment = firebase.firestore.FieldValue.increment;
 
 // Storage exports
 export const storage = firebase.storage();
 export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
 
 /// Helper functions
 
 /**`
  * Gets a users/{uid} document with username
  * @param  {string} username
  */
 export async function getUserWithUsername(username) {
   const usersRef = firestore.collection('users');
   const query = usersRef.where('username', '==', username).limit(1);
   const userDoc = (await query.get()).docs[0];
   return userDoc;
   // console.log("userref", usersRef);
 }
 
 /**`
  * Converts a firestore document to JSON
  * @param  {DocumentSnapshot} doc
  */
 export function postToJSON(doc) {
   const data = doc.data();
   return {
     ...data,
     // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
     createdAt: data?.createdAt.toMillis() || 0,
     updatedAt: data?.updatedAt.toMillis() || 0,
   };
 }