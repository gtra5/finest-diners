
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB1nLEQ51gzsUFQXxRLMg-F4Bpm0PNo0pU",
  authDomain: "food-delivery-website-64695.firebaseapp.com",
  projectId: "food-delivery-website-64695",
  storageBucket: "food-delivery-website-64695.firebasestorage.app",
  messagingSenderId: "87428116870",
  appId: "1:87428116870:web:de0a520f55d06e5b63fc07",
  measurementId: "G-963WG3BMPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };