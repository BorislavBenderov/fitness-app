import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAmquYzUR8l26dIZOndCb2vPdcfIAxkfnM",
  authDomain: "fitness-app-ba6d1.firebaseapp.com",
  projectId: "fitness-app-ba6d1",
  storageBucket: "fitness-app-ba6d1.appspot.com",
  messagingSenderId: "992420590503",
  appId: "1:992420590503:web:b7d0312a82d7c9dc457c82"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);