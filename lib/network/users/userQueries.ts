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
  user: User,
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await sendEmailVerification(userCredential.user);
    const userRef = doc(db, "users", userCredential.user.uid);
    user.id = userCredential.user.uid;
    await setDoc(userRef, { ...user });
    await auth.signOut();
    console.log("User registered successfully");
    return true;
  } catch (error) {
    // console.error('Error registering user: ', error);
    return false;
  }
};

export const signInWithEmail = async (
  email: string,
  password: string,
): Promise<boolean> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    console.log(user);

    if (!user.emailVerified) {
      // console.log('Email not verified');
      return false;
    }

    // console.log('User signed in and session created successfully:', user.uid);
    return true;
  } catch (error) {
    // console.error('Error signing in with email:', error);
    return false;
  }
};
