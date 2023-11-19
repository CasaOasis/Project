// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi8q8voQ98_zh7-yIRyATCbeWpzeVVNgo",
  authDomain: "casaoasisgtm-9b609.firebaseapp.com",
  projectId: "casaoasisgtm-9b609",
  storageBucket: "casaoasisgtm-9b609.appspot.com",
  messagingSenderId: "464322103646",
  appId: "1:464322103646:web:01575f86c29666cc63a7cf",
  measurementId: "G-K5P4NTHY79"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);