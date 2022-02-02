// import firebase  from "firebase";

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBGVqFuaWzh9OMequJ90IeHo2z-zZqLqbI",
  authDomain: "fir-57778.firebaseapp.com",
  projectId: "fir-57778",
  storageBucket: "fir-57778.appspot.com",
  messagingSenderId: "438449040820",
  appId: "1:438449040820:web:ddd200d3764052349256e1"
};



  const firebaseApp = firebase.initializeApp(firebaseConfig);


  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db , auth };