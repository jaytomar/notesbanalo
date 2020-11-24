import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyA080kJfAPwLpYxRMozXm1z2gYSUobiwnw",
    authDomain: "notesbanalo.firebaseapp.com",
    databaseURL: "https://notesbanalo.firebaseio.com",
    projectId: "notesbanalo",
    storageBucket: "notesbanalo.appspot.com",
    messagingSenderId: "592029749801",
    appId: "1:592029749801:web:187b77d0eabbec763d0238"
  };

firebase.initializeApp(firebaseConfig)

const firebaseInstance = firebase;
export default firebaseInstance
export const authService = firebase.auth()
export const dbService = firebase.firestore()