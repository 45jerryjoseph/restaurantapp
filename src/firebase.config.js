import {getApp ,getApps ,initializeApp} from "firebase/app";
import {getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyBAI_K-blJBYKg70cLhEvM7mRfm0p5A8dc",
    authDomain: "restaurantapp-25df0.firebaseapp.com",
    databaseURL: "https://restaurantapp-25df0-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-25df0",
    storageBucket: "restaurantapp-25df0.appspot.com",
    messagingSenderId: "642630631454",
    appId: "1:642630631454:web:296f5fba091f41c78cae0f",
    measurementId: "G-MMV6MMML56"
  };

const app = getApps.length > 0 ? getApp() :initializeApp(firebaseConfig);

const firestore =getFirestore(app);
const storage = getStorage(app);

export {app , firestore , storage};