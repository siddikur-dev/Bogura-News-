import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
const AuthProvider = ({ children }) => {
  // State declare useState to user data management
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In User
  const SignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // LogOut User
  const logOut = () => {
    return signOut(auth);
  };

  // AuthContext Value
  const userData = {
    user,
    createUser,
    SignInUser,
    logOut,
    loading,
  };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
