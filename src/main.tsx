import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import ThemeSelector from "./common/components/themeSelector";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeSelector>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeSelector>
  </React.StrictMode>
);
