// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_API_KEY,
  // authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_PROJECT_ID,
  // storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSESING_SENDER_ID,
  // appId: import.meta.env.VITE_APP_ID,
  // measurementId: import.meta.env.VITE_MEASUREMENT_ID,

  apiKey: "AIzaSyC_LVSeCE0rfJSP8XhJDhcKEkdbhzN-w18",
  authDomain: "npm-project-d3999.firebaseapp.com",
  projectId: "npm-project-d3999",
  storageBucket: "npm-project-d3999.appspot.com",
  messagingSenderId: "406497186944",
  appId: "1:406497186944:web:d4fa1c9d67aac8d4834265",
  measurementId: "G-TVBT35JW40"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
