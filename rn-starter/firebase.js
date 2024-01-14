 // Import the functions you need from the SDKs you need
 import firebase from 'firebase/compat/app'
 import 'firebase/compat/auth';
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKw7GHDCKv0ZELELZn2slyGdDe0ofA-wk",
  authDomain: "teamtrack-1c6cb.firebaseapp.com",
  projectId: "teamtrack-1c6cb",
  storageBucket: "teamtrack-1c6cb.appspot.com",
  messagingSenderId: "718035900729",
  appId: "1:718035900729:web:34ff7039a8568dc4bef0e8",
  measurementId: "G-YD1KLB8ENH"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth();

export { auth };
