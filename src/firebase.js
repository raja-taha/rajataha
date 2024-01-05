import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA5FtQJ3RnuiuyZcgq7H1HFA6C07LEvD3Q",
  authDomain: "rajataha-portfolio.firebaseapp.com",
  projectId: "rajataha-portfolio",
  storageBucket: "rajataha-portfolio.appspot.com",
  messagingSenderId: "460697413465",
  appId: "1:460697413465:web:16397ad18b691a95580e48",
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();
