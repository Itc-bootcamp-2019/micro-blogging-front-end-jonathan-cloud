// import firebase from 'firebase';
import * as firebase from 'firebase'
import 'firebase/firestore'
import app from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyClIl5jJqOQC00e3OFEwEAVeGn1jTwZlyQ",
  authDomain: "twitter-c2619.firebaseapp.com",
  databaseURL: "https://twitter-c2619.firebaseio.com",
  projectId: "twitter-c2619",
  storageBucket: "twitter-c2619.appspot.com",
  messagingSenderId: "774007924195",
  appId: "1:774007924195:web:f72bf607814660da0cecd6",
  measurementId: "G-5YVQW43XTY"
};




const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

export const auth = firebaseApp.auth()
