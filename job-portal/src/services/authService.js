import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

const googleProvider = new GoogleAuthProvider();

export const registerUser = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const loginUser = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const loginWithGoogle = () =>
  signInWithPopup(auth, googleProvider);

export const forgotPassword = (email) =>
  sendPasswordResetEmail(auth, email);

export const logoutUser = () =>
  signOut(auth);

export const observeAuth = (callback) =>
  onAuthStateChanged(auth, callback);