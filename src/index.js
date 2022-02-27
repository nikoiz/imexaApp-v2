import React from "react";
import ReactDOM from "react-dom";
import ImexaApp from "./ImexaApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ImexaApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
