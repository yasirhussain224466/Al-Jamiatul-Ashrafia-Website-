import firebase from "firebase/app";

const Config = {
  apiKey: "AIzaSyBXDF07W4GhovVOT1ElNnO_dFehYwJQck4",
  authDomain: "al-jamiatul-ashrafia-58938.firebaseapp.com",
  databaseURL: "https://al-jamiatul-ashrafia-58938-default-rtdb.firebaseio.com",
  projectId: "al-jamiatul-ashrafia-58938",
  storageBucket: "al-jamiatul-ashrafia-58938.appspot.com",
  messagingSenderId: "1033604251516",
  appId: "1:1033604251516:web:dfdb8cebc16a92efb2eef9",
};
firebase.initializeApp(Config);

export default firebase;
