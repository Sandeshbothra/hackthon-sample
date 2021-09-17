import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB1G50D7ffuPfGOYPMdaMMZOvBc0Kvvago",
    authDomain: "scripbox-hackathons.firebaseapp.com",
    databaseURL: "https://scripbox-hackathons-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "scripbox-hackathons",
    storageBucket: "scripbox-hackathons.appspot.com",
    messagingSenderId: "702935382043",
    appId: "1:702935382043:web:096cd791dce70e163660be",
    measurementId: "G-GPQ6JKFXB4"
  };
  
  // Initialize Firebase
const fireDB = initializeApp(firebaseConfig);
export default fireDB;