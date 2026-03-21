// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyDJ8sBNHbCjWvMnQo5CkLXMZMAnev8k4rwDE",
  authDomain: "aliado-a8e07.firebaseapp.com",
  projectId: "aliado-a8e07",
  storageBucket: "aliado-a8e07.appspot.com",
  messagingSenderId: "1093262483975",
  appId: "1:1093262483975:web:36ed883cf7b09be094c81a6",
  measurementId: "G-CHRMJQDFH7"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
// Se quiser usar Firestore:
const db = firebase.firestore();
// Se quiser usar Auth:
const auth = firebase.auth();
