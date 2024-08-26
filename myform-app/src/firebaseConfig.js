// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDXAw-ExFQfEhtBRy6DMcqIkmyXjcoKxHI",
  authDomain: "login-page-81500.firebaseapp.com",
  projectId: "login-page-81500",
  storageBucket: "login-page-81500.appspot.com",
  messagingSenderId: "673330072630",
  appId: "1:673330072630:web:a3c23b96902bedd7345c97",
  measurementId: "G-DTDHYPN46Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, sendPasswordResetEmail };
