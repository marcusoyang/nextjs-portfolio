import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWCsNvwxomh2AN4MlavWOgx2v7WWY4GDE",
    authDomain: "nextjs-portfolio-90c4c.firebaseapp.com",
    projectId: "nextjs-portfolio-90c4c",
    storageBucket: "nextjs-portfolio-90c4c.appspot.com",
    messagingSenderId: "816652291339",
    appId: "1:816652291339:web:8123f8b371a9403d61e60e",
    measurementId: "G-TCS2QNTLDC"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();