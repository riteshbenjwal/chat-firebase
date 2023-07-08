// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCOjpWXSfBoQuA6lpq3BDNXAIHReG-jo4",
  authDomain: "chat-92f07.firebaseapp.com",
  projectId: "chat-92f07",
  storageBucket: "chat-92f07.appspot.com",
  messagingSenderId: "578010580664",
  appId: "1:578010580664:web:0090ca1bff271e57c2964d",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
