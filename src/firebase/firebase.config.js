// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL4QafVTEeOgF7nTQ1zJ-6gkNHAjh6HJg",
  authDomain: "learning-website-client.firebaseapp.com",
  projectId: "learning-website-client",
  storageBucket: "learning-website-client.appspot.com",
  messagingSenderId: "262244978979",
  appId: "1:262244978979:web:64372fc8d4396928273c96",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
