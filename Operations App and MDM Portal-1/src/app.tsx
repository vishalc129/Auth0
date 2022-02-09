import React from "react";
import { Provider } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import configureStore from "./redux";
import Routes from "./ui/routes";
import AuthenticationButton from "./ui/components/authentication-button";

export function App() {
  const store = configureStore();

  return (
    <>
      <AuthenticationButton></AuthenticationButton>{" "}
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
