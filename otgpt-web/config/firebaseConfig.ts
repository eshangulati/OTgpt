// Import the functions you need from the SDKs you need
// config/firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDes7qtr6V7cSQEahPhQItetQEEllEDAA8",
  authDomain: "otgpt-c207d.firebaseapp.com",
  projectId: "otgpt-c207d",
  storageBucket: "otgpt-c207d.appspot.com",
  messagingSenderId: "367540781872",
  appId: "1:367540781872:web:2ce6a964fe3677d86fbef5",
  measurementId: "G-4CNMECHKRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, GoogleAuthProvider, signInWithPopup };