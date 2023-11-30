import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7KNaScC8ujPZ42AwWMU8gGoIBs0_RlrI",
  authDomain: "my-first-app-911d8.firebaseapp.com",
  projectId: "my-first-app-911d8",
  storageBucket: "my-first-app-911d8.appspot.com",
  messagingSenderId: "392550968394",
  appId: "1:392550968394:web:1b2f88db79aa92149f0ab3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };
