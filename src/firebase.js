import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSBfwH4qeGTSgpP5qDmD1rgvPzzDUYW0g",
  authDomain: "trendella-store-38a0b.firebaseapp.com",
  projectId: "trendella-store-38a0b",
  storageBucket: "trendella-store-38a0b.firebasestorage.app",
  messagingSenderId: "731801449734",
  appId: "1:731801449734:web:6c3ceb35f22be8d1cd1a87",
  measurementId: "G-NRWD6YV1L5"
};

// Start Firebase App
const app = initializeApp(firebaseConfig);

// Export Firestore database
export const db = getFirestore(app);

