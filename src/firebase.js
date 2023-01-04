// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvkD8TwRq8jcYpK4uH3WXQ4oGDDASXH0A",
  authDomain: "chat-app-b8285.firebaseapp.com",
  projectId: "chat-app-b8285",
  storageBucket: "chat-app-b8285.appspot.com",
  messagingSenderId: "177127523155",
  appId: "1:177127523155:web:83e760f1b786ae347557a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)