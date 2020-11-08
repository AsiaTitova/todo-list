import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNDVWDxf1cNbVkkuq8aFkgmP8KpvFD3yM",
  authDomain: "todo-list-e99da.firebaseapp.com",
  databaseURL: "https://todo-list-e99da.firebaseio.com",
  projectId: "todo-list-e99da",
  storageBucket: "todo-list-e99da.appspot.com",
  messagingSenderId: "925193700535",
  appId: "1:925193700535:web:371c5c41d94882e135b932",
  measurementId: "G-8VE3XR879V"
};

const fire =  firebase.initializeApp(firebaseConfig);



export default fire;
