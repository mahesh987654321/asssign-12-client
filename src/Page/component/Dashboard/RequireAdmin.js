import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebaseinit";
import Loading from "../Loading/Loading";
import UserAdmin from "./UserAdmin";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin] = UserAdmin(user);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};
export default RequireAdmin;
