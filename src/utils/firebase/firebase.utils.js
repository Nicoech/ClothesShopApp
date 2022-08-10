import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi4zCrO4oOhWJsaaLu7d4LLq3JTmz2SyQ",
  authDomain: "crow-db-86659.firebaseapp.com",
  projectId: "crow-db-86659",
  storageBucket: "crow-db-86659.appspot.com",
  messagingSenderId: "933304563423",
  appId: "1:933304563423:web:392ba8ee3f8cca6b125b6a",
  measurementId: "G-HZJJ32JZ5X",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  propmt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  //if user data doesn't exists
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  return userDocRef;
};
