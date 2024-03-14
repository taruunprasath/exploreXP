// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4IWByLTgRavo7P7w5wjGPNj57tQIJ0XA",
  authDomain: "explorexp-14a1d-3cabf.firebaseapp.com",
  projectId: "explorexp-14a1d",
  storageBucket: "explorexp-14a1d.appspot.com",
  messagingSenderId: "58580228542",
  appId: "1:58580228542:web:7f1e8b0b461668b29cc1ef"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;