import React from "react";
import { useState, useEffect } from "react";
import firebase from "firebase/app";

const Home = () => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const firebaseApp = firebase.initializeApp({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    });

    firebaseApp.ready().then(() => {
      setIsConnected(true);
  }, []);

  return (
    <div>
      {isConnected ? (
        <h1>Conectado ao Firebase!</h1>
      ) : (
        <h1>Não conectado ao Firebase!</h1>
      )}
    </div>
  );
};

export default Home;
