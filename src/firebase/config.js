import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAuZbcKTznmYHeNSH-mhi0_sDrr3S31TOE",
  authDomain: "fir-8dd50.firebaseapp.com",
  projectId: "fir-8dd50",
  storageBucket: "fir-8dd50.appspot.com",
  messagingSenderId: "114161191830",
  appId: "1:114161191830:web:99ec31b664edc7249bebb7",
  measurementId: "G-PHB95W3B06",
};

export default firebase.initializeApp(firebaseConfig);
