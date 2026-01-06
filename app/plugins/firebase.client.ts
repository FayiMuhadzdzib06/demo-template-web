import { defineNuxtPlugin } from "#app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyAqAP0kD-iDQw3iHEsIRZOQMrrEVXnpSNU",
    authDomain: "fir-template-web.firebaseapp.com",
    projectId: "fir-template-web",
    storageBucket: "fir-template-web.firebasestorage.app",
    messagingSenderId: "664308797182",
    appId: "1:664308797182:web:86b5af39d344703879dfaf",
  };

  const app = initializeApp(firebaseConfig);

  return {
    provide: {
      auth: getAuth(app),
      db: getFirestore(app),
    },
  };
});
