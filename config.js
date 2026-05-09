// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// --- PASTE YOUR FIREBASE CONFIG HERE ---
const firebaseConfig = {
  apiKey: "AIzaSyCo4tIpdTsgEKT9WD6EvGPql08uGY6fdeA",
  authDomain: "aura-2-o.firebaseapp.com",
  projectId: "aura-2-o",
  storageBucket: "aura-2-o.firebasestorage.app",
  messagingSenderId: "1037418507644",
  appId: "1:1037418507644:web:7022eb35d18b247f5608f9",
  measurementId: "G-3WD48R3WHJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export the database variable so other files can use it
export { db };
