import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { clientConfig } from "./config";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const app = initializeApp(clientConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app);

export { db, storage, auth };
