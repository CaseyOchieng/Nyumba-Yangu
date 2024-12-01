// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//  Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-plug-a56e0.firebaseapp.com",
  projectId: "real-estate-plug-a56e0",
  storageBucket: "real-estate-plug-a56e0.firebasestorage.app",
  messagingSenderId: "490559863583",
  appId: "1:490559863583:web:89cb6de179ec08860c8e2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
