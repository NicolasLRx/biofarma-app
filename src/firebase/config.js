// firebase/config.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_3bHBgyLAHRxykipAWyyUnVBoGBnyk5k",
  authDomain: "biofarma-app.firebaseapp.com",
  projectId: "biofarma-app",
  storageBucket: "biofarma-app.appspot.com",
  messagingSenderId: "29594685415",
  appId: "1:29594685415:web:0bb034dbfc952f7401b742",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
