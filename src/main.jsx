import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-f454hp2m6jl0lw3o.us.auth0.com"
    clientId="3n3Njvf3SbSYhNk3LJ0qftHOtq68NL0E"
    redirectUri={window.location.origin}>

    <AppProvider>
    <App />
    </AppProvider>
    </Auth0Provider>
    );
