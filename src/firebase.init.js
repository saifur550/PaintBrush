// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzgXK9G-Oy4A4B0aVisogzZYea79ALHNo",
  authDomain: "paintbrush0000.firebaseapp.com",
  projectId: "paintbrush0000",
  storageBucket: "paintbrush0000.appspot.com",
  messagingSenderId: "413888917918",
  appId: "1:413888917918:web:81dba4c226bd128abd268f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;