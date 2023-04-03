// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: "AIzaSyAW1afV2leNxkiZBRWxKxnFp0dJ8h1JC8o",
    authDomain: "to-do-91e26.firebaseapp.com",
    projectId: "to-do-91e26",
    storageBucket: "to-do-91e26.appspot.com",
    messagingSenderId: "109640302051",
    appId: "1:109640302051:web:8dfac5ae2c26fc0982f4d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;