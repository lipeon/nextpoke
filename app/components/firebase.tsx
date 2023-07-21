// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Tj4yK44J80zTsRQYii0ZtxIKteEW5w0",
  authDomain: "tinderpoke.firebaseapp.com",
  projectId: "tinderpoke",
  storageBucket: "tinderpoke.appspot.com",
  messagingSenderId: "465511504224",
  appId: "1:465511504224:web:ed06d61b8573fbf3eee605"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export{app}