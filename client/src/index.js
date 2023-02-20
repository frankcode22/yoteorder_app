import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

import {GoogleOAuthProvider} from '@react-oauth/google';

ReactDOM.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="388302183915-q8n5dqvqo6ogsqcd9es6aa7tsf3d2ldd.apps.googleusercontent.com">

    
  <App/>
  </GoogleOAuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
