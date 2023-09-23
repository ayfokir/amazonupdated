// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { //yene project configuration
  apiKey: "AIzaSyB6s2vuqO6rWy35G8WKNwKKEJXr7Mq1Wy8",
  authDomain: "fir-d48f7.firebaseapp.com",
  projectId: "fir-d48f7",
  storageBucket: "fir-d48f7.appspot.com",
  messagingSenderId: "976677094747",
  appId: "1:976677094747:web:a4789e4053bbc7b259867e",
  measurementId: "G-R30L46BZKD"
};
// Initialize Firebase.
// const app = initializeApp( firebaseConfig ); // yene app initialize tederege
// //just express initialize endemnaregew.
// const auth = getAuth(app);
// export { auth };

const app = firebase.initializeApp( firebaseConfig )
const db = app.firestore(); //firestore: is the database of firebase, then access maderege enchilalen
const auth = firebase.auth(); // auth: firebase lay enable yaderegnewun authentication yseralnal  
export { db, auth };



