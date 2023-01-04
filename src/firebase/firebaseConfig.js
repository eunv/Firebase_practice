import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/functions'
import 'firebase/storage';
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyDE6eceMHEcgp3Aki4pYDizLErYsubaGFg",
    authDomain: "test003-cc325.firebaseapp.com",
    projectId: "test003-cc325",
    storageBucket: "test003-cc325.appspot.com",
    messagingSenderId: "796843459493",
    appId: "1:796843459493:web:004def96d03efd86fd1e4c",
    measurementId: "G-BBE6JHC5HS"
});

firebase.auth().languageCode = 'ko'

const auth = firebase.auth()
const firestore = firebase.firestore()
const functions = firebase.app().functions('asia-northeast3')

export {auth, firestore, functions, firebase}