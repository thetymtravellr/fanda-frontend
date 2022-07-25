import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBalC0atCJUo4eBR7cjYDJeZqBO_bifZQ0" ,
  authDomain: "fanda-commerce.firebaseapp.com" ,
  projectId: "fanda-commerce" ,
  storageBucket: "fanda-commerce.appspot.com" ,
  messagingSenderId: "735606983110" ,
  appId: "1:735606983110:web:cdac54046d00d0a1edcac7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;