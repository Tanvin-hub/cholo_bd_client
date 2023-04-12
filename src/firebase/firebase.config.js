// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtKcoEnQR3LuOBJml-PiEKrxI77Q3VnVk",
  authDomain: "cholobd-9ffee.firebaseapp.com",
  projectId: "cholobd-9ffee",
  storageBucket: "cholobd-9ffee.appspot.com",
  messagingSenderId: "543404681331",
  appId: "1:543404681331:web:a8db319028749d88106206",
  measurementId: "G-86F2NMHHL1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;