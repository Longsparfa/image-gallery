import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyBkvP5BYMsqR4gIi5TtDuFo08eaYCDd2W0",
  authDomain: "image-gallery-b56ee.firebaseapp.com",
  projectId: "image-gallery-b56ee",
  storageBucket: "image-gallery-b56ee.appspot.com",
  messagingSenderId: "191115278875",
  appId: "1:191115278875:web:0d91684a5765d8b76b96be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };