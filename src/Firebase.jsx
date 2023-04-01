import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"
 
const firebaseConfig = {
    apiKey: "AIzaSyArcmO2xqcgWcVZLv7u692c0rPhqg3qUSw",
    authDomain: "dashboard-5cf11.firebaseapp.com",
    projectId: "dashboard-5cf11",
    storageBucket: "dashboard-5cf11.appspot.com",
    messagingSenderId: "624188001398",
    appId: "1:624188001398:web:4cf64fc0824827b348a357",
    measurementId: "G-LQ4HBH14W1"
  };
// init firebase app

  const app = initializeApp(firebaseConfig);

// init services 
 
const db = getFirestore()

// collection ref

const colRef = collection(db,"institute")

  export default app