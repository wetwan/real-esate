import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import PropertyContextProvider from "./context/PropertyContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PropertyContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PropertyContextProvider>
  </StrictMode>
);
