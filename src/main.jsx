import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_3bHBgyLAHRxykipAWyyUnVBoGBnyk5k",
  authDomain: "biofarma-app.firebaseapp.com",
  projectId: "biofarma-app",
  storageBucket: "biofarma-app.appspot.com",
  messagingSenderId: "29594685415",
  appId: "1:29594685415:web:0bb034dbfc952f7401b742",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
