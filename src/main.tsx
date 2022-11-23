import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeSelector from "./common/components/themeSelector";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </React.StrictMode>
);
