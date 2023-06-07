// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRFI-EOMcqadXIKiaEi9WMdF0l7zOzsQ4",
  authDomain: "ecom-project-a2926.firebaseapp.com",
  projectId: "ecom-project-a2926",
  storageBucket: "ecom-project-a2926.appspot.com",
  messagingSenderId: "162710564757",
  appId: "1:162710564757:web:7ceaecdf38b4937278909c",
  measurementId: "G-EWR7Q8L9B6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage = getStorage(app);
