import React from "react";
import ReactDOM from "react-dom/client";
// components
import Root from "./components/root";
// styles
import "./styles/index.styles.css";
import "./styles/tailwind.styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
