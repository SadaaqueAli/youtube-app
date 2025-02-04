import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqLoRqsXPr7uvMUQiUHW0iAHFfJiSZM98",
  authDomain: "video-72385.firebaseapp.com",
  projectId: "video-72385",
  storageBucket: "video-72385.firebasestorage.app",
  messagingSenderId: "649679605539",
  appId: "1:649679605539:web:b227244ea5aec1937cc696"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export default app;