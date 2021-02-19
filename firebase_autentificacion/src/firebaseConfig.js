import firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCVgkNnQ2h5ZB_kdnAiwYxM2cV4_Ya1FOo",
    authDomain: "pruebas-react-dd7b7.firebaseapp.com",
    projectId: "pruebas-react-dd7b7",
    storageBucket: "pruebas-react-dd7b7.appspot.com",
    messagingSenderId: "924232347982",
    appId: "1:924232347982:web:b273fc4093d80854af2e1f"
  };
  // Initialize Firebase 
const fire=firebase.initializeApp(firebaseConfig);
const auth= fire.auth()

export {auth}