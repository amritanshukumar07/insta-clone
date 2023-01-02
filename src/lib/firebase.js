import  Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import {seedDatabase} from "../seed";

const config ={
    apiKey: "AIzaSyDx5c7QTfj9NQbxs0dFFkz1B_qiHpgAmEc",
  authDomain: "instagram-7ef9a.firebaseapp.com",
  projectId: "instagram-7ef9a",
  storageBucket: "instagram-7ef9a.appspot.com",
  messagingSenderId: "1016280096971",
  appId: "1:1016280096971:web:00b5894fe4edc880ddbb4e"
};
const firebase = Firebase.initializeApp(config);
const { FieldValue }= Firebase.firestore;


// seedDatabase(firebase);

export {firebase,FieldValue};