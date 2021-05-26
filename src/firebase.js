import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHCUgHh2gvOY74SjCdgHa4ejoEHe8jzes",
    authDomain: "tik-tok-clone-c344b.firebaseapp.com",
    projectId: "tik-tok-clone-c344b",
    storageBucket: "tik-tok-clone-c344b.appspot.com",
    messagingSenderId: "575978791002",
    appId: "1:575978791002:web:d344f33c45c919dca3b863",
    measurementId: "G-9HPBC1H5RK"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
  
export default db;