"use client"

import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { createContext, useContext, useEffect, useState } from 'react'

const AuthContext = createContext<any>(null);

export function useAuth() {
    return useContext(AuthContext);
} 

type Props = {
    children: React.ReactNode
}

export default function AuthContextProvider({ children } : Props) {
    const [userName, setUserName] = useState<any>(null);
    const [uid, setUid] = useState<any>(null);
    const [userEmail, setUserEmail] = useState<any>(null);
    const [user, setUser] = useState<any>(null);
    const [phoneNumber, setNumberPhone] = useState<any>(null);
    
    // const [isAdmin, setIsAdmin] = useState<any>(false);
    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            const querySnapshot = await getDoc(doc(db, "users", user.uid));
            const username = querySnapshot.data()?.displayName;
            const phoneNumber = querySnapshot.data()?.phoneNumber;
            setUserName(username);
            setUserEmail(user.email);
            setUser(user);
            setUid(user.uid);
            setNumberPhone(phoneNumber);
            // if(querySnapshot.data().role === "admin"){
            //   setIsAdmin(true);
            // } else {
            //   setIsAdmin(false);
            // }
          } else {
            setUserName(null);            
            setUserEmail(null);
            setUser(null);
            setUid(null);
            setNumberPhone(phoneNumber);
          }
        });
      }, []);

      const value = { user, uid, userName, userEmail, phoneNumber };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  )
}
