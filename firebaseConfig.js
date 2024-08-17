// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxpRwAiT_ashewnDUPJxplStNzbvZOc24",
  authDomain: "file-sharing-a8a39.firebaseapp.com",
  projectId: "file-sharing-a8a39",
  storageBucket: "file-sharing-a8a39.appspot.com",
  messagingSenderId: "61053577190",
  appId: "1:61053577190:web:5f617865fe65ee8ce51827",
  measurementId: "G-KKMRBRXGPK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
