import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBnkyW3VpHi6u--17PMatdY79bJBXJ45Ow",
    authDomain: "geolock-8771b.firebaseapp.com",
    projectId: "geolock-8771b",
    storageBucket: "geolock-8771b.appspot.com",
    messagingSenderId: "186780124632",
    appId: "1:186780124632:web:2c63d5797419cb63135ead",
    measurementId: "G-Q1GEXHKMT6"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};