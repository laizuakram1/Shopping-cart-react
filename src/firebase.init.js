// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBauek7HHzqm5ujC9LZA2Rl74yVU2duseA",
  authDomain: "ema-john-shopping-9a69f.firebaseapp.com",
  projectId: "ema-john-shopping-9a69f",
  storageBucket: "ema-john-shopping-9a69f.appspot.com",
  messagingSenderId: "269304722043",
  appId: "1:269304722043:web:dab9ab9ddaa2ecee7428de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;