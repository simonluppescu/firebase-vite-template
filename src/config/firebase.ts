// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";
import { connectStorageEmulator, getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// FIRESTORE
// export const firestore = getFirestore(firebaseApp);
export const firestore = getFirestore();
connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
// AUTHENTICATION
// export const auth = getAuth(firebaseApp);
export const auth = getAuth();
connectAuthEmulator(auth, "http://127.0.0.1:9099");
// FUNCTIONS
// export const functions = getFunctions(firebaseApp);
export const functions = getFunctions(getApp());
connectFunctionsEmulator(functions, "127.0.0.1", 5001);
// STORAGE
// export const storage = getStorage(firebaseApp);
export const storage = getStorage();
connectStorageEmulator(storage, "127.0.0.1", 9199);
