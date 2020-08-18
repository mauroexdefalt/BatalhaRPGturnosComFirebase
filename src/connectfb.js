import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


let firebaseConfig = {
    apiKey: "AIzaSyCCTGV6SB2_CTN9jbFVwdqbaV5cvn4QusA",
    authDomain: "reactapp-7f3be.firebaseapp.com",
    databaseURL: "https://reactapp-7f3be.firebaseio.com",
    projectId: "reactapp-7f3be",
    storageBucket: "reactapp-7f3be.appspot.com",
    messagingSenderId: "933492464782",
    appId: "1:933492464782:web:14bdb9c1618303e9f07ddf",
    measurementId: "G-JH35E7LM6B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  export default firebase ;