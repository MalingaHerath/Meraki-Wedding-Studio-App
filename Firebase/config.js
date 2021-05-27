import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

    

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCvq-fvnkHH8BAoz8UJg_eG94j3wsk_ESg",
    authDomain: "meraki-studio-booking-system.firebaseapp.com",
    projectId: "meraki-studio-booking-system",
    storageBucket: "meraki-studio-booking-system.appspot.com",
    messagingSenderId: "159128686607",
    appId: "1:159128686607:web:44a8c0fe6af08052d7d37a",
    measurementId: "G-8QVC7GV7QG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  

