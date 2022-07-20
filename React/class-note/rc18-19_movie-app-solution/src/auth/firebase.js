import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: "AIzaSyADJjUK-UwLaXwQ3cPi353p8gbo0VXdEMs",
  authDomain: "movie-app-62654.firebaseapp.com",
  projectId: "movie-app-62654",
  storageBucket: "movie-app-62654.appspot.com",
  messagingSenderId: "186294488457",
  appId: "1:186294488457:web:ae4e3823c19d1945e7e558",
  measurementId: "G-XP3C7X6MGR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
