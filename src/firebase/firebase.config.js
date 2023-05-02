// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdl5Z44yitCqEJdEF4vye5IgcfjczekGY",
    authDomain: "a10-chef-recipe-hunter.firebaseapp.com",
    projectId: "a10-chef-recipe-hunter",
    storageBucket: "a10-chef-recipe-hunter.appspot.com",
    messagingSenderId: "709880407788",
    appId: "1:709880407788:web:fc8d6b56d2d5348c2b27c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;