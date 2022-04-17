// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZmXdWLbBbQVHL8BMTg5iEXmPb0R_DYPI",
  authDomain: "world-gym-bb4c8.firebaseapp.com",
  projectId: "world-gym-bb4c8",
  storageBucket: "world-gym-bb4c8.appspot.com",
  messagingSenderId: "499720722812",
  appId: "1:499720722812:web:c7fde06a5954f7e094ecf9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
