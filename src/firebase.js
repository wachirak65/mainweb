// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApjIuTAaTrni_Rn0ASOiAjhMJMhn-0JS0",
  authDomain: "agriuntiredproject.firebaseapp.com",
  databaseURL: "https://agriuntiredproject-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agriuntiredproject",
  storageBucket: "agriuntiredproject.appspot.com",
  messagingSenderId: "135387709485",
  appId: "1:135387709485:web:c3398ef1fae8893ece38a4",
  measurementId: "G-24GYE2NF93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export default app;