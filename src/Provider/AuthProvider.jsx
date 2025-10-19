import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
const AuthProvider = ({ children }) => {
  // State declare useState to user data management
  const [user, setUser] = useState();

  // Create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(
      auth((user) => {
        console.log(user);
      })
    );
    return () => {
      unSubscribe();
    };
  }, []);
  const userData = {
    user,
    setUser,
    createUser,
  };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
