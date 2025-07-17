import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSUBzNpJXqWf4VwLIlko7oJ_3wHxrTVBI",
  authDomain: "nzc-awareness-project.firebaseapp.com",
  projectId: "nzc-awareness-project",
  storageBucket: "nzc-awareness-project.firebasestorage.app",
  messagingSenderId: "465157547832",
  appId: "1:465157547832:web:81e334edd754aca5f543cd",
  measurementId: "G-8QR3894Y3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;