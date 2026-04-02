import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDu8S1bxyieNxk8sWns-rgWQ4-LC06a3z0",
  authDomain: "pearlvea-fd935.firebaseapp.com",
  projectId: "pearlvea-fd935",
  storageBucket: "pearlvea-fd935.firebasestorage.app",
  messagingSenderId: "585483614841",
  appId: "1:585483614841:web:465857b6da66fa0facb2a8",
  measurementId: "G-W1KMMWTDX0"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
