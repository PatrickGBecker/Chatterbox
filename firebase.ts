import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb6yIjtUF-9GWNiMEbQ3EwDtiFx7CejL8",
  authDomain: "chatterbox-125d5.firebaseapp.com",
  projectId: "chatterbox-125d5",
  storageBucket: "chatterbox-125d5.appspot.com",
  messagingSenderId: "881768394350",
  appId: "1:881768394350:web:850d08ad2eb6098ffd407f"
};

// Initialize Firebase
//Singleton Pattern: we only want a single instance
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };