// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAvCnreBN3Iws37lcbTHBr0Z-XG4o3600",
  authDomain: "webapp-with-my-bestie-misha.firebaseapp.com",
  databaseURL: "https://webapp-with-my-bestie-misha-default-rtdb.firebaseio.com",
  projectId: "webapp-with-my-bestie-misha",
  storageBucket: "webapp-with-my-bestie-misha.firebasestorage.app",
  messagingSenderId: "316356114999",
  appId: "1:316356114999:web:f42b207a72466ca2505db2",
  measurementId: "G-XT21SDT654"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export initialized app and any other Firebase services you want to use
export { app, getDatabase };