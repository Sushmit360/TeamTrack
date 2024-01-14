import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfuln9jLhJXG9MviQ4KnB8EumCciKDMO4",
  authDomain: "fir-auth-14062.firebaseapp.com",
  projectId: "fir-auth-14062",
  storageBucket: "fir-auth-14062.appspot.com",
  messagingSenderId: "466977537169",
  appId: "1:466977537169:web:3fd1c17ce64e000092d330"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth();

export { auth };

