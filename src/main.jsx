import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./Styles/Base/reset.css";
import "./Styles/Base/variables.css";
import "./Styles/Base/typography.css";
import "./Styles/Base/global.css";

import "./Styles/Animations/keyframes.css";
import "./Styles/Animations/transitions.css";

import "./Styles/Components/Button.css";
import "./Styles/Components/Card.css";
import "./Styles/Components/Cursor.css";
import "./Styles/Components/Loader.css";
import "./Styles/Components/Navbar.css";

import "./Styles/Pages/Home.css";
import "./Styles/Pages/Journey.css";
import "./Styles/Pages/Proposal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);