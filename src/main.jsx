import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./styles/base/reset.css";
import "./styles/base/variables.css";
import "./styles/base/typography.css";
import "./styles/base/global.css";

import "./styles/animations/keyframes.css";
import "./styles/animations/transitions.css";

import "./styles/components/button.css";
import "./styles/components/card.css";
import "./styles/components/cursor.css";
import "./styles/components/loader.css";
import "./styles/components/navbar.css";

import "./styles/pages/home.css";
import "./styles/pages/journey.css";
import "./styles/pages/proposal.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);