
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCX1-HzLb-_nQ0vqhLhWq5hR-LeGmbX91I",
    authDomain: "listed-assignment-8ac5a.firebaseapp.com",
    projectId: "listed-assignment-8ac5a",
    storageBucket: "listed-assignment-8ac5a.appspot.com",
    messagingSenderId: "106701978309",
    appId: "1:106701978309:web:ac865682ae7b2fd4ba4eac",
    measurementId: "G-ESFPNDX5PT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {app, auth};
  