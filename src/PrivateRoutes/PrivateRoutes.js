import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

//   if (loading) {
//     return <Spinner animation="border" variant="info" />;
//   }

  if (!user) {
    return <Navigate to="/login" state={{ form: location }} replace></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
