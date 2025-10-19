import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router";
import Loading from "../Components/Loading";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/auth/login"></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
