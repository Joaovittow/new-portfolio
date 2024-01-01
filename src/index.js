import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle  from "./GlobalStyle.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />, <GlobalStyle />
  </>
);
