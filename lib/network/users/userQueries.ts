import {
  doc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
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
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    console.log("User signed in:", user);
    return true;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error signing in with email:", errorMessage);
    return false;
  }
};

export const addProduct = async (
  category: any,
  frequency: any,
  name: string,
  price: string,
  summary: string,
  info: string,
  img: string,
): Promise<boolean> => {
  try {
    const user = auth.currentUser;

    if (user) {
      await setDoc(doc(collection(db, "products")), {
        category: category,
        frequency: frequency,
        name: name,
        price: price,
        summary: summary,
        info: info,
        sellerId: user.uid,
        img: img,
      });
    }

    console.log("Successfully Sent!");

    return true;
  } catch (e) {
    console.error("Error adding document: ", e);
    return false;
  }
};

const list: any[] = [];

export const getProducts = async () => {
  const user = auth.currentUser;
  const col = query(
    collection(db, "products"),
    where("id", "==", user ? user.uid : ""),
  );
  const querySnapshot = await getDocs(col);
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    list.push(doc.data());
  });
  return list;
};

export { list };
