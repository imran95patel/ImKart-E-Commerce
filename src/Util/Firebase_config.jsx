import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGEXQuPBoWb-Q8mpRjkkUNnPvL-3HJ8FA",
  authDomain: "mcart-5a93d.firebaseapp.com",
  projectId: "mcart-5a93d",
  storageBucket: "mcart-5a93d.appspot.com",
  messagingSenderId: "286247019544",
  appId: "1:286247019544:web:7c68b34b4a16ed3d290f6d",
  measurementId: "G-K7JBYTENYS",
};

const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig;
