import firebase from 'firebase';
require('@firebase/firestore');

 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDxi1XENPXDV7-QiALG2sgDofEEYCiRRCc",
    authDomain: "booksanta-2f419.firebaseapp.com",
    projectId: "booksanta-2f419",
    storageBucket: "booksanta-2f419.appspot.com",
    messagingSenderId: "59522343003",
    appId: "1:59522343003:web:4d57a675fda285db045f7e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();