// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOLn8L2oqPeyPP0Yhr-xiWWb4XFw-sg_U",
  authDomain: "netflix-gpt-d9617.firebaseapp.com",
  projectId: "netflix-gpt-d9617",
  storageBucket: "netflix-gpt-d9617.appspot.com",
  messagingSenderId: "372310875710",
  appId: "1:372310875710:web:6f00794d005d4ec5fffb6f",
  measurementId: "G-2723GGR0VP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();