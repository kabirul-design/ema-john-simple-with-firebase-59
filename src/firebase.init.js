// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfXYTOsdNWC7_N10BWxK7E3kMqhTUmXic",
  authDomain: "ema-john-simple-bfd47.firebaseapp.com",
  projectId: "ema-john-simple-bfd47",
  storageBucket: "ema-john-simple-bfd47.appspot.com",
  messagingSenderId: "115003445102",
  appId: "1:115003445102:web:944c05ff62eb1400737b7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;