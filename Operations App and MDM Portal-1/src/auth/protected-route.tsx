import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const ProtectedRoute = ({ component }: any) => {
  const ProtectedRouteComponent = withAuthenticationRequired(component);
  return <ProtectedRouteComponent />;
};
export default ProtectedRoute;
