import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";

interface Props {
  children: React.ReactNode;
  requiredRole?: "ADMIN" | "USER";
}

export const ProtectedRoute: React.FC<Props> = ({ children, requiredRole }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;
  if (requiredRole && user.role !== requiredRole) return <Navigate to="/" />;

  return <>{children}</>;
};
