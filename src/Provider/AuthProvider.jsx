import React from "react";
import { AuthContext } from "./AuthContext";
const AuthProvider = ({ children }) => {
  const user = {
    name: "Siddikur Rahman",
  };
  return <AuthContext value={user}>{children}</AuthContext>;
};

export default AuthProvider;
