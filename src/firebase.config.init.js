// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDS4-gX6NfhOCUlku1YfAbELBF5TYVJ8t8",
    authDomain: "student-management-syste-6efe5.firebaseapp.com",
    projectId: "student-management-syste-6efe5",
    storageBucket: "student-management-syste-6efe5.appspot.com",
    messagingSenderId: "415987093869",
    appId: "1:415987093869:web:d750dd4b57339ce0070a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
