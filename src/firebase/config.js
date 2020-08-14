import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCXU4pIadvc6JufrUtePViaCgHCfKknf68",
    authDomain: "pari-firegram.firebaseapp.com",
    databaseURL: "https://pari-firegram.firebaseio.com",
    projectId: "pari-firegram",
    storageBucket: "pari-firegram.appspot.com",
    messagingSenderId: "783861625069",
    appId: "1:783861625069:web:986d03a0e3427e33a81ce4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage,projectFirestore };