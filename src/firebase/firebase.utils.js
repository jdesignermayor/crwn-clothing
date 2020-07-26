import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD9NYIxT1LtyCH3IyIW3STVtotw1kc_c9g",
  authDomain: "crwn-db-8f9aa.firebaseapp.com",
  databaseURL: "https://crwn-db-8f9aa.firebaseio.com",
  projectId: "crwn-db-8f9aa",
  storageBucket: "crwn-db-8f9aa.appspot.com",
  messagingSenderId: "958161698347",
  appId: "1:958161698347:web:998ec84ec5696e5b1cf46e",
  measurementId: "G-G35C3HKGSF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
