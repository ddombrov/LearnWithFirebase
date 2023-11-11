// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";


// STEP 1: Declare Firebase Environment Variables  
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDmxBEduJL0mp_4XMbdcn7_KlHzpvDI3ak",
    authDomain: "learnfirebase-f2223.firebaseapp.com",
    projectId: "learnfirebase-f2223",
    storageBucket: "learnfirebase-f2223.appspot.com",
    messagingSenderId: "396211842872",
    appId: "1:396211842872:web:e8f90806d5c0b4e79a1bcd"
  };

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
