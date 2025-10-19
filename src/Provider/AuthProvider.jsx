import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  // State declare useState to user data management
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Create User With Mail Pass
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //  SignUpWithGoogle
  const signUpGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Sign In User
  const SignInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign With Github
  const signWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
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
    setUser,
    createUser,
    signUpGoogle,
    signWithGithub,
    SignInUser,
    logOut,
    loading,
  };
  return <AuthContext value={userData}>{children}</AuthContext>;
};

export default AuthProvider;
