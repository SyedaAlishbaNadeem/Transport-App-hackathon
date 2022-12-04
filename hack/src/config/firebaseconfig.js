// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXEkYybJBgJnJhbloAoaMj81A__aMZCKM",
  authDomain: "hackathon-app-106cf.firebaseapp.com",
  projectId: "hackathon-app-106cf",
  storageBucket: "hackathon-app-106cf.appspot.com",
  messagingSenderId: "745179571689",
  appId: "1:745179571689:web:e2b1bbf252acc40cc59778",
  measurementId: "G-NKSSMSMFTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



//ALWAYS EXPORT THR DEFAULT APP HERE TO WORK THE APP WITH FIREBASE
export default app;