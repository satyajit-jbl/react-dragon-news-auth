// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7i3HJWnNBbh88zRNbtPZSEvhXDm3nhSM",
  authDomain: "dragon-news-fce1b.firebaseapp.com",
  projectId: "dragon-news-fce1b",
  storageBucket: "dragon-news-fce1b.firebasestorage.app",
  messagingSenderId: "247693524773",
  appId: "1:247693524773:web:eb1645effd731a991c24cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;