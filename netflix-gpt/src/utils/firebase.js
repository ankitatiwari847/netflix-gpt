// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR7k6U_3sdg9XjWMoKtY3Il7nIJgYkf4A",
  authDomain: "netflix-gpt-5e53d.firebaseapp.com",
  projectId: "netflix-gpt-5e53d",
  storageBucket: "netflix-gpt-5e53d.appspot.com",
  messagingSenderId: "739765967161",
  appId: "1:739765967161:web:88ed9f153f9596b2fe70e8",
  measurementId: "G-D5D8W3LC3K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
