// lib/network/users/userQueries.ts

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { User } from "@/lib/types/userTypes";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const registerUser = async (
  email: string,
  password: string,
  displayName: string,
  phoneNumber: string,
): Promise<boolean> => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        displayName: displayName,
        phoneNumber: phoneNumber,
      });
    }

    console.log("Successfully Signed Up!");

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};

export const signInWithEmail = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // console.log('User signed in and session created successfully:', user.uid);
    return true;
  } catch (error) {
    // console.error('Error signing in with email:', error);
    return false;
  }
};

export const addProduct = async (
  category: string,
  frequency: string,
  name: string,
  price: string,
  summary: string,
  info: string,
): Promise<boolean> => {
  try {
    const user = auth.currentUser;

    if (user) {
      await setDoc(doc(db, "users", user.uid), {
        category: category,
        frequency: frequency,
        name: name,
        price: price,
        summary: summary,
        info: info,
      });
    }

    console.log("Successfully Sent!");

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};
