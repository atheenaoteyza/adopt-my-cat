// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXc6ctcikiMpdHsMkf6NTZuavYqtC0F8M",
  authDomain: "adopt-a-cat-23dd7.firebaseapp.com",
  projectId: "adopt-a-cat-23dd7",
  storageBucket: "adopt-a-cat-23dd7.firebasestorage.app",
  messagingSenderId: "963201183003",
  appId: "1:963201183003:web:9b90d9d39fe4c57e6737be",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
